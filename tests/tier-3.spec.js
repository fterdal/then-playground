/* eslint-disable no-unused-expressions */
const chai = require('chai')
const sinon = require('sinon')
const sinonChai = require('sinon-chai')
// const { rainbow } = require('chalk-animation')
const { blue, green } = require('chalk')

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
} = require('../utils')

console.clear()
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

  it.only('calls crayonDraw with blue & green concurrently then magenta & yellow concurrently then cyan last', done => {
    expect(crayonDraw).to.not.be.called
    // console.log('BEFORE RUNNING CODE stillDrawing:', stillDrawing())
    // process.stdout.write(blue('Hello'))
    // process.stdout.write(green(' World\n'))
    YOUR_CODE_HERE()
    // console.log('BEFORE PROMISES HAVE FINISHED stillDrawing:', stillDrawing())
    setTimeout(() => {
      // expect(crayonDraw).callCount(5)
      // expect(crayonDraw.getCall(0).args[0]).to.equal('blue')
      // expect(crayonDraw.getCall(1).args[0]).to.equal('green')
      // expect(crayonDraw.getCall(2).args[0]).to.equal('magenta')
      // expect(crayonDraw.getCall(3).args[0]).to.equal('yellow')
      // expect(crayonDraw.getCall(4).args[0]).to.equal('cyan')
      // console.log('AFTER PROMISES HAVE RESOLVED stillDrawing:', stillDrawing())
      // console.log(crayonDraws)
      done()
    }, 1050)
  })
})
