const { fake } = require('sinon')
const { blue, white, magenta, yellow, green, cyan, red, dim } = require('chalk')

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

let crayonDraws = []
const resetCrayonDraws = () => {
  crayonDraws = []
}

const unfinishedDraws = currentColor => {
  return crayonDraws
    .filter(draw => !draw.end && draw.color !== currentColor)
    .map(draw => draw.color)
}

// Returns true if there is still a crayon draw going on that hasn't ended yet
// Ignore the color currently being drawn that calls this function.
const stillDrawing = currentColor => {
  // if (crayonDraws.length === 0) return false
  // console.log(crayonDraws)
  return crayonDraws.find(draw => draw.end) === undefined
}

const crayonDraw = (color = 'white') => {
  const logColor = { blue, white, magenta, yellow, green, cyan, red }[color]
  if (typeof logColor !== 'function') {
    throw new Error(`Couldn't find ${color} crayon`)
  }
  if (promisesData.shouldError && color === 'green') {
    throw new Error('Uh oh, the green crayon broke!')
  }
  const promiseId = Math.floor(Math.random() * 1000000)
  crayonDraws.push({
    id: promiseId,
    start: new Date(),
    end: null,
    color,
  })
  return fulfillAfterMs(200).then(() => {
    process.stdout.write(logColor(color) + ' -> ')
    if (unfinishedDraws(color).length > 0) {
      // console.log('')
    }
    // console.log(unfinishedDraws(color))
    if (!stillDrawing()) {
      // process.stdout.write('not still drawing')
      // console.log('')
    }
    crayonDraws.find(draw => draw.id === promiseId).end = new Date()
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
  stillDrawing,
}
