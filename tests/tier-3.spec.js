/* eslint-disable no-unused-expressions */
const chai = require('chai')
const sinon = require('sinon')
const sinonChai = require('sinon-chai')
// const { rainbow } = require('chalk-animation')

chai.use(sinonChai)
const { expect } = chai

const { YOUR_CODE_HERE } = require('../src/tier-3')
const {
  crayonDraw,
  handleError,
  crayonDraws,
  resetCrayonDraws,
  promisesShouldFulfill,
  promisesShouldReject,
  stillDrawing,
  normalizeCrayonDraws,
} = require('../utils')

describe('Tier 3: Parallel', () => {
  afterEach(() => {
    sinon.reset()
    resetCrayonDraws()
    promisesShouldFulfill()
  })

  it('calls crayonDraw five times', done => {
    expect(crayonDraw).to.not.be.called
    YOUR_CODE_HERE()
    setTimeout(() => {
      expect(crayonDraw).callCount(5)
      done()
    }, 1050)
  })

  it('calls crayonDraw with blue, green, magenta, yellow, and cyan (once each)', done => {
    expect(crayonDraw).to.not.be.called
    YOUR_CODE_HERE()
    setTimeout(() => {
      expect(crayonDraw).callCount(5)
      expect(crayonDraw).to.be.calledWith('blue')
      expect(crayonDraw).to.be.calledWith('green')
      expect(crayonDraw).to.be.calledWith('magenta')
      expect(crayonDraw).to.be.calledWith('yellow')
      expect(crayonDraw).to.be.calledWith('cyan')
      done()
    }, 1050)
  })

  /**
   * When this next test passes, you should see something like:
   * blue green
   * magenta yellow
   * cyan
   *
   * Note that green may resolve before blue and yellow before magenta. It's
   * usually not possible to predict which async operation will finish first.
   */
  it('calls crayonDraw with blue & green concurrently then magenta & yellow concurrently then cyan last', done => {
    expect(crayonDraw).to.not.be.called
    YOUR_CODE_HERE()
    setTimeout(() => {
      // Uncomment this console.log to see your crayonDraws timings
      // console.log(normalizeCrayonDraws(crayonDraws))
      const { blue, green, magenta, yellow, cyan } = normalizeCrayonDraws(
        crayonDraws
      )
      expect(Math.abs(blue.end - green.end)).to.be.lessThan(20)
      expect(Math.abs(magenta.end - yellow.end)).to.be.lessThan(20)
      expect(blue.end).to.be.lte(magenta.start)
      expect(magenta.end).to.be.lte(cyan.start)
      done()
    }, 1050)
  })
})
