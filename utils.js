const genericPromiseFn = (waitForMs, payload, throwError = false) =>
  new Promise((resolve, reject) => {
    if (throwError !== false) return reject(throwError)
    setTimeout(() => resolve(payload), waitForMs)
  })

const fulfillAfterMs = (waitForMs, payload) =>
  genericPromiseFn(payload, waitForMs)

const rejectAfterMs = (waitForMs, error) =>
  genericPromiseFn(undefined, waitForMs, error)

const requireArgument = (correctArg, waitForMs, payload, error) => {
  return arg => {
    if (arg === correctArg) {
      return fulfillAfterMs(waitForMs, payload)
    }
    return rejectAfterMs(waitForMs, error)
  }
}

const waitFor10Ms = () => fulfillAfterMs(10, 'signal clearance!')

module.exports = {
  genericPromiseFn,
  fulfillAfterMs,
  rejectAfterMs,
  requireArgument,
  waitFor10Ms,
}
