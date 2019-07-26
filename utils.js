const { fake } = require('sinon')
const { blue, white, magenta, yellow, green, cyan, red } = require('chalk')

const genericPromiseFn = (waitForMs, payload, throwError = false) =>
  new Promise((resolve, reject) => {
    if (throwError !== false) return reject(throwError)
    setTimeout(() => resolve(payload), waitForMs)
  })

const fulfillAfterMs = (waitForMs, payload = 'SOME DATA') =>
  genericPromiseFn(waitForMs, payload)

const rejectAfterMs = (waitForMs, error = new Error('OH NO')) =>
  genericPromiseFn(waitForMs, undefined, error)

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

/**
 * Have it take an argument: blue, magenta, yellow, green, cyan, white
 * and it writes out the name of that color in that color.
 *
 * When it starts, it pushes the information onto an array in this file,
 * recording each time one of these crayonDraws is called.
 */
const crayonDraws = []
const crayonDraw = (color = 'white') => {
  const getColor = { blue, white, magenta, yellow, green, cyan, red }[color]
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
  handleError: fake(),
  promisesShouldFulfill,
  promisesShouldReject,
  crayonDraw: fake(crayonDraw),
  crayonDraws,
}
