/* eslint-disable no-unused-expressions */
const chai = require('chai')
const sinon = require('sinon')
const sinonChai = require('sinon-chai')
const { rainbow } = require('chalk-animation')

chai.use(sinonChai)
const { expect } = chai

const { YOUR_CODE_HERE } = require('../src/tier-4')
const {
  crayonDraw,
  handleError,
  crayonDraws,
  resetCrayonDraws,
  promisesShouldFulfill,
  promisesShouldReject,
  normalizeCrayonDraws,
} = require('../utils')

describe('Tier 3: Parallel', () => {
  const crayons = [
    { id: 1, color: 'green' },
    { id: 2, color: 'magenta' },
    { id: 3, color: 'yellow' },
  ]
  afterEach(() => {
    sinon.reset()
    resetCrayonDraws()
    promisesShouldFulfill()
  })

  // TODO: change the text
  it('calls crayonDraw with all the stuff', done => {
    expect(crayonDraw).to.not.be.called
    YOUR_CODE_HERE(crayons)
    setTimeout(() => {
      expect(crayonDraw).callCount(6)
      done()
    }, 1050)
  })
})
