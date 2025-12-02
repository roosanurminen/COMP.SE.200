import { expect } from 'chai'
import ceil from '../../src/ceil.js'

describe('AI generated tests for ceil.js', () => {
  it('should round up to the nearest integer by default', () => {
    expect(ceil(4.006)).to.equal(5)
    expect(ceil(4)).to.equal(4)
    expect(ceil(-1.2)).to.equal(-1)
  })

  it('should round up to a given positive precision', () => {
    expect(ceil(6.004, 2)).to.equal(6.01)
    expect(ceil(1.2345, 3)).to.equal(1.235)
  })

  it('should round up to a given negative precision', () => {
    expect(ceil(6040, -2)).to.equal(6100)
    expect(ceil(125, -1)).to.equal(130)
  })

  it('should handle zero precision explicitly', () => {
    expect(ceil(4.006, 0)).to.equal(5)
  })

  it('should return NaN if number cannot be converted', () => {
    expect(ceil('abc')).to.be.NaN
  })

  it('should coerce string numbers', () => {
    expect(ceil('4.001')).to.equal(5)
    expect(ceil('6.004', 2)).to.equal(6.01)
  })

  it('should treat null as 0', () => {
    expect(ceil(null)).to.equal(0)
    expect(ceil(null, 2)).to.equal(0)
  })

  it('should handle undefined as NaN for number input but default precision', () => {
    expect(ceil(undefined)).to.be.NaN
  })

  it('should handle negative numbers with precision', () => {
    expect(ceil(-3.141, 2)).to.equal(-3.14)
    expect(ceil(-3.141, 1)).to.equal(-3.1)
  })
})