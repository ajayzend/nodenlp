const expect = require('chai').expect;
const add = require('../add.js');

// describe data
describe('add.js', function() {
  it('should return the sum of two positive numbers', function() {
    expect(add(2, 4)).to.equal(6);
  });

  it('should return the sum of two negative numbers', function() {
    expect(add(-2, -4)).to.equal(-6);
  });

  it('should return the sum of an array of numbers', function() {
    expect(add([1, 2, 3, 4, 5])).to.equal(15);
  });
});
