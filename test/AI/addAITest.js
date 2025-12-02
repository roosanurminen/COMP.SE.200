import { expect } from 'chai'
import add from '../../src/add.js'

describe('AI generated tests for add.js', () => {
  it('should add two positive numbers', () => {
    expect(add(6, 4)).to.equal(10)
  })

  it('should add negative numbers', () => {
    expect(add(-3, -7)).to.equal(-10)
  })

  it('should add a positive and a negative number', () => {
    expect(add(10, -3)).to.equal(7)
  })

  it('should return the other number when one argument is null', () => {
    expect(add(null, 5)).to.equal(5)
    expect(add(5, null)).to.equal(5)
  })

  it('should treat undefined as the default value (0)', () => {
    expect(add(undefined, 4)).to.equal(4)
    expect(add(4, undefined)).to.equal(4)
  })

  it('should return 0 when both arguments are undefined or null', () => {
    expect(add(undefined, undefined)).to.equal(0)
    expect(add(null, null)).to.equal(0)
  })

  it('should handle floating point numbers', () => {
    expect(add(0.1, 0.2)).to.be.closeTo(0.3, 0.000001)
  })

  it('should coerce string numbers correctly', () => {
    expect(add('4', '6')).to.equal(10)
  })

  it('should return NaN when input cannot be converted to a number', () => {
    expect(add('a', 4)).to.be.NaN
    expect(add(4, 'b')).to.be.NaN
  })
})