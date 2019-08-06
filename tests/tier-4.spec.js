/* eslint-disable no-unused-expressions */
const chai = require('chai')
const sinon = require('sinon')
const sinonChai = require('sinon-chai')

chai.use(sinonChai)
const { expect } = chai

const { YOUR_CODE_HERE } = require('../src/tier-4')
const {
  crayonDraw,
  resetCrayonDraws,
  promisesShouldFulfill,
  setFirstRow,
} = require('../utils')

describe("Tier 4: Parallel Cont'd", () => {
  afterEach(() => {
    sinon.reset()
    resetCrayonDraws()
    promisesShouldFulfill()
  })
  /*
    For this tier, we need to draw five colors: blue, green, magenta, yellow,
    and cyan. They should be drawn in two rows, i.e. some subset of them drawn
    concurrently, followed by the remaining colors drawn concurrently.

    We can call the special function getFirstRow() (already imported in
    src/tier-4.js) that tells us which colors should be in the first row -- but
    it takes 10 milliseconds to resolve, so we'll need to wait for it to finish.
    After all the colors in the first row have been drawn

    Any color that is not drawn in the first row should be drawn in the second row.

    For example, if getFirstRow() returned ['blue', 'magenta'], we'd see
    blue magenta (in any order)
    yellow green cyan (in any order)

    If getFirstRow() returned [], we'd see
    blue yellow green magenta cyan (in any order)
  */
  it('calls crayonDraw five times', done => {
    // const rows = setFirstRow(['green', 'magenta', 'yellow'])
    const rows = setFirstRow('random')
    expect(crayonDraw).to.not.be.called
    YOUR_CODE_HERE()
    console.log(rows)
    setTimeout(() => {
      expect(crayonDraw).callCount(5)
      done()
    }, 750)
  })
})
