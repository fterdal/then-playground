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

  it('calls crayonDraw with blue, green, magenta, yellow, and cyan (once each)', done => {
    expect(crayonDraw).to.not.be.called
    YOUR_CODE_HERE()
    setTimeout(() => {
      expect(crayonDraw).callCount(5)
      expect(crayonDraw).to.be.calledWith('blue')
      expect(crayonDraw).to.be.calledWith('green')
      expect(crayonDraw).to.be.calledWith('magenta')
      expect(crayonDraw).to.be.calledWith('yellow')
      expect(crayonDraw).to.be.calledWith('cyan')
      done()
    }, 1050)
  })

  it('calls crayonDraw with blue & green concurrently then magenta & yellow concurrently then cyan last', done => {
    expect(crayonDraw).to.not.be.called
    YOUR_CODE_HERE()
    setTimeout(() => {
      console.log(normalizeCrayonDraws(crayonDraws))
      console.log(normalizeCrayonDraws(crayonDraws).reduce((drawObj, draw) => {
        drawObj[draw.color] = {
          start: draw.start,
          end: draw.end
        }
        return drawObj
      }, {}))
      done()
    }, 1050)
  })
})
