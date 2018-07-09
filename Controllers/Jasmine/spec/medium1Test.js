
describe('Get Count', function() {
  var vowelsCount = 0;
  it('should return the number of vowels in a given string', function() {
    expect(getCount('This is a test string')).toBe(5);
  });
});