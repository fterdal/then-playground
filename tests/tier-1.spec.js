/* eslint-disable no-unused-expressions */
const chai = require('chai')
const { spy } = require('sinon')
const sinonChai = require('sinon-chai')

chai.use(sinonChai)
const { expect } = chai

const { YOUR_CODE_HERE } = require('../src/tier-1')
const utils = require('../utils')
const { waitFor, finished } = utils

console.clear()
describe('Tier 1: Getting Started', () => {
  describe('Your Code', () => {
    afterEach(() => {
      waitFor.resetHistory()
      finished.resetHistory()
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
  })
})
