var multiply = require('./easy1');

describe('Multiply', function() {
  it('should be able to calculate product of two numbers', function() {
    expect(multiply(5, 5)).toBeCloseTo(25);
  });
});