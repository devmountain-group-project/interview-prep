

describe('Multiples of 3 or 5', function() {
  it('Should return the sum of all the multiples of 3 or 5 below the number passed in', function() {
    expect(solution(10)).toBeCloseTo(23);
  });
});