const promiseRecord = {
  waitFor: {
    timesCalled: [],
  },
}

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

const waitFor = () => {
  const start = new Date()
  return fulfillAfterMs(10).finally(() => {
    promiseRecord.waitFor.timesCalled.push({
      start,
      finish: new Date()
    })
  })
}

module.exports = {
  genericPromiseFn,
  fulfillAfterMs,
  rejectAfterMs,
  requireArgument,
  waitFor,
  promiseRecord,
}
