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

  // We'll pass an array of colors to YOUR_CODE_HERE
  // from among the list: blue, green, magenta, yellow, cyan
  // It might include all of them, none of them, or some
  // subset of them. Your code should draw all of the given colors
  // (concurently), and then all of the remaining colors afterwards
  // (concurrently).
  //
  // For example,
  //   YOUR_CODE_HERE('blue', 'yellow') =>
  //   blue yellow
  //   green magenta cyan
  // OR
  //   YOUR_CODE_HERE() =>
  //   green blue magenta cyan yellow
  // OR
  //   YOUR_CODE_HERE(blue, green, magenta, yellow, cyan) =>
  //   blue yellow magenta cyan green
  //
  // Remember that if several calls to drawCrayon start at the same
  // time, the order in which they'll finish is not predictable.
  it('calls crayonDraw five times', done => {
    // setFirstRow(['green', 'magenta', 'yellow'])
    // setFirstRow([])
    expect(crayonDraw).to.not.be.called
    YOUR_CODE_HERE()
    setTimeout(() => {
      expect(crayonDraw).callCount(5)
      done()
    }, 750)
  })
})
