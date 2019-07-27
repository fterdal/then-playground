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

const similarStartingTime = promiseId => {
  const thisDraw = crayonDraws.find(draw => draw.id === promiseId)
  // console.log('thisDraw', thisDraw)
  const { start } = thisDraw
  // console.log('start', start)
  const interval = 50
  const firstStart = crayonDraws.reduce((earliest, current) => {
    if (current.start < earliest.start) return current
    return earliest
  })
  // console.log(firstStart)
  crayonDraws.forEach(draw => {
    if (draw.id === thisDraw.id) return
    console.log(thisDraw.color, '>-<', draw.color, thisDraw.start - draw.start)
  })
  // console.log(crayonDraws)
  return (
    crayonDraws.find(draw => {
      if (draw.id === promiseId) return false
      // console.log('draw.start - interval', draw.start - interval)
      // console.log('start', start)
      // console.log()
      return draw.start + interval < start || start + interval <= draw.start
    }) !== undefined
  )
}

/**
 * THE GOAL right now is to find a way to log crayonDraws that start at the same
 * time adjacent to one another, while those that start later are logged on separate lines
 * So, if blue and green are concurrent, then magenta and yellow are concurrent,
 * then cyan comes last, it would look like this on the terminal:
 * blue green
 * magenta yellow
 * cyan
 *
 * THE APPROACH is to keep track of when each of these promises starts. And when
 * logging a color, first check to see if any others started at a similar time.
 * If there's a similarly-timed color, log without a newline. If not, begin with
 * a newline.
 *
 * ANOTHER IDEA: Create a throttled "newline" function. Call it at the beginning
 * of each logColor, so that the newline appears no more frequently than an
 * interval (e.g. 100ms)
 */

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
    start: Date.now(),
    end: null,
    color,
  })
  return fulfillAfterMs(200).then(() => {
    // process.stdout.write(logColor(color) + ' ')
    console.log('\t' + logColor(color))
    similarStartingTime(promiseId)
    crayonDraws.find(draw => draw.id === promiseId).end = Date.now()
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
}
