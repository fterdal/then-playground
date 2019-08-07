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
  crayonDraws,
  promisesShouldFulfill,
  promisesShouldReject,
  normalizeCrayonDraws,
  setFirstRow,
  getFirstRow,
  handleError,
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
  it('calls crayonDraw five times and getFirstRow once', done => {
    setFirstRow(['green', 'magenta', 'yellow'])
    expect(crayonDraw).to.not.be.called
    YOUR_CODE_HERE()
    // console.log(rows)
    setTimeout(() => {
      expect(getFirstRow).callCount(1)
      expect(crayonDraw).callCount(5)
      done()
    }, 750)
  })

  it('draws all the colors in the first row concurrently', done => {
    const rows = setFirstRow(['blue', 'cyan', 'magenta'])
    expect(crayonDraw).to.not.be.called
    YOUR_CODE_HERE()
    setTimeout(() => {
      expect(getFirstRow).callCount(1)
      expect(crayonDraw).callCount(5)
      const draws = normalizeCrayonDraws()
      rows.first.forEach(color => {
        expect(draws[color].start).to.be.lessThan(10)
      })
      done()
    }, 750)
  })

  it('draws all the colors in the second row concurrently, after all the first row colors', done => {
    const rows = setFirstRow(['yellow', 'cyan'])
    expect(crayonDraw).to.not.be.called
    YOUR_CODE_HERE()
    setTimeout(() => {
      expect(getFirstRow).callCount(1)
      expect(crayonDraw).callCount(5)
      const draws = normalizeCrayonDraws()
      const lastInFirstRowFinishedAt = rows.first.reduce((latest, color) => {
        if (draws[color].end > latest) return draws[color].end
        return latest
      }, 0)
      rows.second.forEach(color => {
        expect(draws[color].start).to.be.greaterThan(
          lastInFirstRowFinishedAt - 1
        )
      })
      done()
    }, 750)
  })

  it('accepts an arbitrary array of colors for the first row', done => {
    const rows = setFirstRow('random')
    expect(crayonDraw).to.not.be.called
    YOUR_CODE_HERE()
    // Uncomment this console.log to see the expected first and second rows
    // console.log(rows)
    setTimeout(() => {
      expect(getFirstRow).callCount(1)
      expect(crayonDraw).callCount(5)
      const draws = normalizeCrayonDraws()
      const lastInFirstRowFinishedAt = rows.first.reduce((latest, color) => {
        if (draws[color].end > latest) return draws[color].end
        return latest
      }, 0)
      rows.first.forEach(color => {
        expect(draws[color].start).to.be.lessThan(10)
      })
      rows.second.forEach(color => {
        expect(draws[color].start).to.be.greaterThan(
          lastInFirstRowFinishedAt - 1
        )
      })
      done()
    }, 750)
  })

  it('calls handleError with any errors that occur & skip all following crayonDraws', done => {
    setFirstRow(['blue', 'cyan', 'magenta'])
    promisesShouldReject()
    expect(crayonDraw).to.not.be.called
    YOUR_CODE_HERE()
    setTimeout(() => {
      expect(getFirstRow).callCount(1)
      expect(crayonDraw).callCount(3)
      expect(crayonDraw).to.not.be.calledWith('yellow')
      expect(crayonDraw).to.not.be.calledWith('green')
      expect(handleError).to.be.called
      expect(handleError).to.be.calledWithMatch({
        message: 'Uh oh, the magenta crayon broke!',
      })
      done()
    }, 750)
  })
})
