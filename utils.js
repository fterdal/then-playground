const genericPromiseFn = (payload, waitForMs, throwError = false) =>
  new Promise((resolve, reject) => {
    if (throwError !== false) return reject(throwError)
    setTimeout(() => resolve(payload), waitForMs)
  })

module.exports = {
  genericPromiseFn,
}
