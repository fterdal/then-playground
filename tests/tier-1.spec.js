/* eslint-disable no-unused-expressions */
const chai = require('chai')
const { spy, mock } = require('sinon')
const sinonChai = require('sinon-chai')

chai.use(sinonChai)
const { expect } = chai

const Tier1 = require('../src/tier-1')
const { dummy, YOUR_CODE_HERE } = Tier1
const { waitFor10Ms, promiseRecord } = require('../utils')

console.clear()
describe('Tier 1: Getting Started', () => {
  describe('waitFor10Ms', () => {
    let spyWaitFor, spyDone, spyDummy
    const mockDummy = mock(Tier1, 'dummy')
    beforeEach(() => {
      spyWaitFor = spy(waitFor10Ms)
      spyDone = spy()
      spyDummy = spy(dummy)
    })

    it('is called', done => {
      YOUR_CODE_HERE(spyDone)
      expect(spyDone).to.not.be.called
      setTimeout(() => {
        expect(spyDone).to.be.called
        done()
      }, 20)
    })
  })
})
