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
  finished,
  handleError,
} = utils

describe.only('Tier 2: Sequential', () => {
  afterEach(() => {
    sinon.reset()
  })

  it('calls crayonDraw four times', done => {
    expect(crayonDraw).to.not.be.called
    YOUR_CODE_HERE()
    setTimeout(() => {
      expect(crayonDraw).callCount(4)
      done()
    }, 1100)
  })

})
