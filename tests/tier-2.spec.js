/* eslint-disable no-unused-expressions */
const chai = require('chai')
const sinon = require('sinon')
const sinonChai = require('sinon-chai')
const { rainbow } = require('chalk-animation')

chai.use(sinonChai)
const { expect } = chai

const { YOUR_CODE_HERE } = require('../src/tier-2')
const utils = require('../utils')
const {
  crayonDraw,
  handleError,
  crayonDraws,
  resetCrayonDraws,
  promisesShouldFulfill,
  promisesShouldReject,
} = utils

describe('Tier 2: Sequential', () => {
  afterEach(() => {
    sinon.reset()
    resetCrayonDraws()
    promisesShouldFulfill()
  })

  it('calls crayonDraw four times', done => {
    expect(crayonDraw).to.not.be.called
    YOUR_CODE_HERE()
    setTimeout(() => {
      expect(crayonDraw).callCount(4)
      done()
    }, 850)
  })

  it('calls crayonDraw with blue, green, magenta, and yellow (in that order)', done => {
    expect(crayonDraw).to.not.be.called
    YOUR_CODE_HERE()
    setTimeout(() => {
      expect(crayonDraw).callCount(4)
      expect(crayonDraw.getCall(0).args[0]).to.equal('blue')
      expect(crayonDraw.getCall(1).args[0]).to.equal('green')
      expect(crayonDraw.getCall(2).args[0]).to.equal('magenta')
      expect(crayonDraw.getCall(3).args[0]).to.equal('yellow')
      done()
    }, 850)
  })

  it('successive calls to crayonDraw only after the previous one resolves', done => {
    expect(crayonDraw).to.not.be.called
    YOUR_CODE_HERE()
    setTimeout(() => {
      expect(crayonDraw).callCount(4)
      crayonDraws.forEach(({ start }, idx) => {
        if (!idx) return
        const prevStart = crayonDraws[idx - 1].start
        expect(start - prevStart).to.be.greaterThan(190)
      })
      done()
    }, 850)
  })

  it('calls handleError with any errors that occur & skip all following crayonDraws', done => {
    expect(crayonDraw).to.not.be.called
    promisesShouldReject()
    YOUR_CODE_HERE()
    setTimeout(() => {
      expect(crayonDraw).callCount(3)
      expect(crayonDraw.getCall(0).args[0]).to.equal('blue')
      expect(crayonDraw.getCall(1).args[0]).to.equal('green')
      expect(crayonDraw.getCall(2).args[0]).to.equal('magenta')
      expect(handleError).to.be.called
      expect(handleError).to.be.calledWithMatch({
        message: 'Uh oh, the magenta crayon broke!',
      })
      done()
      rainbow('Congratulations! Move on to Tier 3.')
    }, 850)
  })
})
