
describe('To Camel Case', function() {
  it('Should convert dashes/underscores to camel case', function() {
    expect(toCamelCase('here_is-this_string')).toBe('hereIsThisString');
  });
});