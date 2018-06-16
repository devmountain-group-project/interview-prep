var getCount = require('./medium1');

describe('Get Count', function() {
  var vowelsCount = 0;
  it('should return the number of vowels in a given string', function() {
    expect(getCount(5)).toBeCloseTo(0);
  });
});