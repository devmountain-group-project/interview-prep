var positiveSum = require('./easy2');

describe('Positive Sum', function() {
  it('Should return the sum of positive numbers in array', function() {
    expect(positiveSum([2, 3])).toEqual(5);
  });
});