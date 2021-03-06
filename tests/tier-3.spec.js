/* eslint-disable no-unused-expressions */
const chai = require('chai')
const sinon = require('sinon')
const sinonChai = require('sinon-chai')
const { rainbow } = require('chalk-animation')

chai.use(sinonChai)
const { expect } = chai

const { YOUR_CODE_HERE } = require('../src/tier-3')
const {
  crayonDraw,
  handleError,
  resetCrayonDraws,
  promisesShouldFulfill,
  promisesShouldReject,
  normalizeCrayonDraws,
} = require('../utils')

describe('Tier 3: Parallel', () => {
  afterEach(() => {
    sinon.reset()
    resetCrayonDraws()
    promisesShouldFulfill()
  })

  xit('calls crayonDraw five times', done => {
    expect(crayonDraw).to.not.be.called
    YOUR_CODE_HERE()
    setTimeout(() => {
      expect(crayonDraw).callCount(5)
      done()
    }, 1050)
  })

  xit('calls crayonDraw with blue, green, magenta, yellow, and cyan (once each)', done => {
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
  xit('calls crayonDraw with blue & green concurrently then magenta & yellow concurrently then cyan last', done => {
    expect(crayonDraw).to.not.be.called
    YOUR_CODE_HERE()
    setTimeout(() => {
      // Uncomment this console.log to see your crayonDraw timings
      // console.log(normalizeCrayonDraws())
      const { blue, green, magenta, yellow, cyan } = normalizeCrayonDraws()
      expect(Math.abs(blue.end - green.end)).to.be.lessThan(20)
      expect(Math.abs(magenta.end - yellow.end)).to.be.lessThan(20)
      expect(blue.end).to.be.lessThan(magenta.start + 1)
      expect(magenta.end).to.be.lessThan(cyan.start + 1)
      done()
    }, 750)
  })

  xit('calls handleError with any errors that occur & skip all following crayonDraws', done => {
    expect(crayonDraw).to.not.be.called
    promisesShouldReject()
    YOUR_CODE_HERE()
    setTimeout(() => {
      expect(crayonDraw).callCount(4)
      expect(crayonDraw).to.be.calledWith('blue')
      expect(crayonDraw).to.be.calledWith('green')
      expect(crayonDraw).to.be.calledWith('magenta')
      expect(crayonDraw).to.be.calledWith('yellow')
      expect(crayonDraw).to.not.be.calledWith('cyan')
      expect(handleError).to.be.called
      expect(handleError).to.be.calledWithMatch({
        message: 'Uh oh, the magenta crayon broke!',
      })
      done()
      rainbow('Congratulations! Move on to Tier 4.')
    }, 750)
  })
})
