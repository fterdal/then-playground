/* eslint-disable no-unused-expressions */
const chai = require('chai')
const sinon = require('sinon')
const sinonChai = require('sinon-chai')
// const { rainbow } = require('chalk-animation')

chai.use(sinonChai)
const { expect } = chai

const { YOUR_CODE_HERE } = require('../src/tier-3')
const {
  crayonDraw,
  handleError,
  crayonDraws,
  resetCrayonDraws,
  promisesShouldFulfill,
  promisesShouldReject,
  stillDrawing,
  normalizeCrayonDraws,
} = require('../utils')

describe('Tier 3: Parallel', () => {
  afterEach(() => {
    sinon.reset()
    resetCrayonDraws()
    promisesShouldFulfill()
  })

  it('calls crayonDraw five times', done => {
    expect(crayonDraw).to.not.be.called
    YOUR_CODE_HERE()
    setTimeout(() => {
      expect(crayonDraw).callCount(5)
      done()
    }, 1050)
  })

  it('calls crayonDraw with blue & green concurrently then magenta & yellow concurrently then cyan last', done => {
    console.log(crayonDraws)
    expect(crayonDraw).to.not.be.called
    YOUR_CODE_HERE()
    setTimeout(() => {
      // TODO Write the tests here
      console.log(crayonDraws)
      console.log(normalizeCrayonDraws(crayonDraws))
      done()
    }, 1050)
  })
})
