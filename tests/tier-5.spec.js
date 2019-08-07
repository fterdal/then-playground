/* eslint-disable no-unused-expressions */
const chai = require('chai')
const sinon = require('sinon')
const sinonChai = require('sinon-chai')

chai.use(sinonChai)
const { expect } = chai

const { YOUR_CODE_HERE } = require('../src/tier-5')
const {
  crayonDraw,
  resetCrayonDraws,
  crayonDraws,
  promisesShouldFulfill,
  promisesShouldReject,
  normalizeCrayonDraws,
  setColorSequence,
  getColorSequence,
  handleError,
} = require('../utils')

describe("Tier 5: Sequential Cont'd", () => {
  afterEach(() => {
    sinon.reset()
    resetCrayonDraws()
    promisesShouldFulfill()
  })
  /*
    For this tier, we need to draw a sequence of colors.
  */
  xit('calls crayonDraw five times and getColorSequence once', done => {
    setColorSequence(['green', 'magenta', 'yellow'])
    expect(crayonDraw).to.not.be.called
    YOUR_CODE_HERE()
    setTimeout(() => {
      expect(getFirstRow).callCount(1)
      expect(crayonDraw).callCount(5)
      done()
    }, 750)
  })
})
