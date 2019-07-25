const { spy } = require('sinon')

const genericPromiseFn = (waitForMs, payload, throwError = false) =>
  new Promise((resolve, reject) => {
    if (throwError !== false) return reject(throwError)
    setTimeout(() => resolve(payload), waitForMs)
  })

const fulfillAfterMs = (waitForMs, payload) =>
  genericPromiseFn(waitForMs, payload)

const rejectAfterMs = (waitForMs, error) =>
  genericPromiseFn(waitForMs, undefined, error)

const requireArgument = (correctArg, waitForMs, payload, error) => {
  return arg => {
    if (arg === correctArg) {
      return fulfillAfterMs(waitForMs, payload)
    }
    return rejectAfterMs(waitForMs, error)
  }
}

const waitFor = () => fulfillAfterMs(10)

module.exports = {
  genericPromiseFn: spy(genericPromiseFn),
  fulfillAfterMs: spy(fulfillAfterMs),
  rejectAfterMs: spy(rejectAfterMs),
  requireArgument: spy(requireArgument),
  waitFor: spy(waitFor),
  finished: spy(),
}
