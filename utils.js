const { fake } = require('sinon')
const {
  blue,
  white,
  magenta,
  yellow,
  green,
  cyan,
  red,
  gray,
  dim,
} = require('chalk')

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
const crayonDraw = (color = 'white') => {
  const getColor = { blue, white, magenta, yellow, green, cyan, red }[color]
  if (typeof getColor !== 'function') {
    throw new Error(`Couldn't find ${color} crayon`)
  }
  if (promisesData.shouldError && color === 'green') {
    throw new Error('Uh oh, the green crayon broke!')
  }
  crayonDraws.push({
    start: new Date(),
    color,
  })
  return fulfillAfterMs(200).then(() => console.log(getColor(color)))
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
}
