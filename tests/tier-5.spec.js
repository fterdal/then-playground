/* eslint-disable no-unused-expressions */
const chai = require('chai')
const sinon = require('sinon')
const sinonChai = require('sinon-chai')
const { rainbow } = require('chalk-animation')

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
  resetColorSequence,
  handleError,
} = require('../utils')

describe("Tier 5: Sequential Cont'd", () => {
  afterEach(() => {
    sinon.reset()
    resetCrayonDraws()
    promisesShouldFulfill()
    resetColorSequence()
  })
  /*
    For this tier, we need to draw a sequence of colors.
  */
  xit('calls crayonDraw 2 times (when the sequence has 2 colors) and getColorSequence once', done => {
    setColorSequence(['green', 'magenta'])
    expect(crayonDraw).to.not.be.called
    YOUR_CODE_HERE()
    setTimeout(() => {
      expect(getColorSequence).callCount(1)
      expect(crayonDraw).callCount(2)
      done()
    }, 650)
  })

  xit('calls crayonDraw 3 times (when the sequence has 3 colors) and getColorSequence once', done => {
    setColorSequence(['magenta', 'green', 'blue'])
    expect(crayonDraw).to.not.be.called
    YOUR_CODE_HERE()
    setTimeout(() => {
      expect(getColorSequence).callCount(1)
      expect(crayonDraw).callCount(3)
      done()
    }, 850)
  })

  xit('does not call crayonDraw until the previous color is finished being drawn', done => {
    setColorSequence(['cyan', 'green', 'yellow'])
    expect(crayonDraw).to.not.be.called
    YOUR_CODE_HERE()
    setTimeout(() => {
      expect(getColorSequence).callCount(1)
      expect(crayonDraw).callCount(3)
      const { cyan, green, yellow } = normalizeCrayonDraws()
      expect(cyan.start).to.be.lessThan(10)
      expect(green.start).to.be.greaterThan(cyan.end - 1)
      expect(yellow.start).to.be.greaterThan(green.end - 1)
      done()
    }, 850)
  })

  // TODO: Finish this one
  xit('accepts an arbitrary sequence of colors', done => {
    setColorSequence('random')
    expect(crayonDraw).to.not.be.called
    YOUR_CODE_HERE()
    setTimeout(() => {
      expect(getColorSequence).callCount(1)
      expect(crayonDraw).callCount(5)
      // const draws = normalizeCrayonDraws()
      // console.log(draws)
      done()
      rainbow('Congratulations! You finished!')
    }, 1050)
  })
})