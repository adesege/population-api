const { expect } = require('chai');
const { calculateTotalResident } = require('../helpers');

describe('# Helpers', () => {
  it('returns the correct value', () => {
    const value = calculateTotalResident(4, 5);
    expect(value).to.equal(9);
  });
});
