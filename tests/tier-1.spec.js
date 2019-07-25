/* eslint-disable no-unused-expressions */
const chai = require('chai')
const { spy } = require('sinon')
const sinonChai = require('sinon-chai')

chai.use(sinonChai)
const { expect } = chai

const { YOUR_CODE_HERE } = require('../src/tier-1')
const utils = require('../utils')
const { waitFor, promiseRecord } = utils

console.clear()
describe('Tier 1: Getting Started', () => {
  describe('waitFor', () => {
    let spyDone, spyWaitFor
    beforeEach(() => {
      spyDone = spy()
      spyWaitFor = spy(utils, 'waitFor')
    })

    it('is called', done => {
      console.log(promiseRecord.waitFor)
      YOUR_CODE_HERE(spyDone)
      console.log(promiseRecord.waitFor)
      expect(spyDone).to.not.be.called
      console.log(spyWaitFor.wrappedMethod().then(() => console.log('what up')))
      // expect(spyWaitFor).to.be.called
      setTimeout(() => {
        expect(spyDone).to.be.called
        console.log(promiseRecord.waitFor.timesCalled)
        done()
      }, 20)
    })
  })
})
