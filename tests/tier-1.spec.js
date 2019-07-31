/* eslint-disable no-unused-expressions */
const chai = require('chai')
const sinon = require('sinon')
const sinonChai = require('sinon-chai')
const { rainbow } = require('chalk-animation')

chai.use(sinonChai)
const { expect } = chai

const { YOUR_CODE_HERE } = require('../src/tier-1')
const utils = require('../utils')
const {
  waitFor,
  finished,
  handleError,
  promisesShouldFulfill,
  promisesShouldReject,
} = utils

describe('Tier 1: Getting Started', () => {
  afterEach(() => {
    sinon.reset()
    // sinon.restore()
    promisesShouldFulfill()
  })

  it('calls waitFor', () => {
    expect(waitFor).to.not.be.called
    YOUR_CODE_HERE()
    expect(waitFor).to.be.called
  })

  it('calls finished() only after waitFor is resolved', done => {
    expect(waitFor).to.not.be.called
    YOUR_CODE_HERE()
    expect(finished).to.not.be.called
    expect(waitFor).to.be.called
    setTimeout(() => {
      expect(finished).to.be.called
      done()
    }, 20)
  })

  it('calls handleError() if an error occurs', done => {
    promisesShouldReject()
    YOUR_CODE_HERE()
    expect(handleError).to.not.be.called
    setTimeout(() => {
      expect(finished).to.not.be.called
      expect(handleError).to.be.called
      done()
    }, 20)
  })

  it('pass the error to handleError()', done => {
    promisesShouldReject()
    YOUR_CODE_HERE()
    setTimeout(() => {
      expect(finished).to.not.be.called
      expect(handleError).to.be.called
      expect(handleError).to.be.calledWithMatch({
        message: 'oopsies, something broke',
      })
      done()
      rainbow('Congratulations! Move on to Tier 2.')
    }, 20)
  })
})
