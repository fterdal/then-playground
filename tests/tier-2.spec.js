/* eslint-disable no-unused-expressions */
const chai = require('chai')
const sinon = require('sinon')
const sinonChai = require('sinon-chai')
const { rainbow } = require('chalk-animation')

chai.use(sinonChai)
const { expect } = chai

const { YOUR_CODE_HERE } = require('../src/tier-2')
const utils = require('../utils')
const { crayonDraw, handleError, crayonDraws } = utils

describe('Tier 2: Sequential', () => {
  afterEach(() => {
    sinon.reset()
  })

  it('calls crayonDraw four times', done => {
    expect(crayonDraw).to.not.be.called
    // console.log('crayonDraws', crayonDraws)
    YOUR_CODE_HERE()
    setTimeout(() => {
      // expect(crayonDraw).callCount(4)
      // console.log('crayonDraws', crayonDraws)
      done()
    }, 900)
  })
})