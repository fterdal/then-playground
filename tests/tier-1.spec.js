const chai = require('chai')
const { spy } = require('sinon')
const sinonChai = require('sinon-chai')

chai.use(sinonChai)
const { expect } = chai

const { waitFor10Ms, YOUR_CODE_HERE } = require('../src/tier-1')

console.clear()
describe('Tier 1: Getting Started', () => {
  describe('waitFor10Ms', () => {
    let spyWaitFor, spyDone
    beforeEach(() => {
      spyWaitFor = spy(waitFor10Ms)
      spyDone = spy()
    })
    it('is called', () => {
      expect()
    })
  })
})
