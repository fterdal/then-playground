const { fake } = require('sinon')
const { blue, white, magenta, yellow, green, cyan, red, dim } = require('chalk')
const debounce = require('lodash.debounce')
const shuffle = require('lodash.shuffle')

const genericPromiseFn = (waitForMs, payload, throwError = false) =>
  new Promise((resolve, reject) => {
    if (throwError !== false) return reject(throwError)
    setTimeout(() => resolve(payload), waitForMs)
  })

const fulfillAfterMs = (waitForMs, payload = 'SOME DATA') =>
  genericPromiseFn(waitForMs, payload)

const rejectAfterMs = (
  waitForMs,
  error = new Error('oopsies, something broke')
) => genericPromiseFn(waitForMs, undefined, error)

const requireArgument = (correctArg, waitForMs, payload, error) => {
  return arg => {
    if (arg === correctArg) {
      return fulfillAfterMs(waitForMs, payload)
    }
    return rejectAfterMs(waitForMs, error)
  }
}

const promisesData = {
  shouldError: false,
}

const promisesShouldReject = () => {
  promisesData.shouldError = true
}

const promisesShouldFulfill = () => {
  promisesData.shouldError = false
}

const waitFor = () => {
  if (promisesData.shouldError) {
    return rejectAfterMs(10)
  }
  return fulfillAfterMs(10)
}

const handleError = err => {
  console.log(dim('Successfully handled this error: ') + dim(red(err.message)))
}

const noise = () => {
  return Math.floor(Math.random() * 6)
}

let crayonDraws = []
const resetCrayonDraws = () => {
  while (crayonDraws.length) {
    crayonDraws.pop()
  }
}

// eslint-disable-next-line no-shadow
const normalizeCrayonDraws = crayonDraws => {
  const earliestStart = crayonDraws.reduce((earliest, draw) => {
    if (draw.start < earliest) return draw.start
    return earliest
  }, Infinity)
  return crayonDraws
    .map(draw => {
      return {
        ...draw,
        start: draw.start - earliestStart,
        end: draw.end - earliestStart,
      }
    })
    .reduce((drawObj, draw) => {
      drawObj[draw.color] = {
        start: draw.start,
        end: draw.end,
      }
      return drawObj
    }, {})
}

const newLine = debounce(() => {
  console.log('')
}, 100)

const order = shuffle([1, 2, 3])

// What should `await crayonDraw` return?
const crayonDraw = (color = 'white') => {
  const logColor = { blue, white, magenta, yellow, green, cyan, red }[color]
  if (typeof logColor !== 'function') {
    throw new Error(`Couldn't find ${color} crayon`)
  }
  const promiseId = Math.floor(Math.random() * 1000000)
  crayonDraws.push({
    id: promiseId,
    start: Date.now(),
    end: null,
    color,
  })
  return fulfillAfterMs(200 + noise()).then(() => {
    if (promisesData.shouldError && color === 'magenta') {
      throw new Error('Uh oh, the magenta crayon broke!')
    }
    process.stdout.write(logColor(color) + ' ')
    newLine()
    crayonDraws.find(draw => draw.id === promiseId).end = Date.now()
    return order.pop()
  })
}

module.exports = {
  genericPromiseFn: fake(genericPromiseFn),
  fulfillAfterMs: fake(fulfillAfterMs),
  rejectAfterMs: fake(rejectAfterMs),
  requireArgument: fake(requireArgument),
  waitFor: fake(waitFor),
  finished: fake(),
  handleError: fake(handleError),
  promisesShouldFulfill,
  promisesShouldReject,
  crayonDraw: fake(crayonDraw),
  crayonDraws,
  resetCrayonDraws,
  normalizeCrayonDraws,
}
