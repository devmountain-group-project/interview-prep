var isIsogram = require('./medium2');

describe('Is Isogram', function() {
  it('Should determine if a string is an Isogram', function() {
    expect(isIsogram(true)).toEqual(true) && expect(isIsogram(false)).toEqual(false);
  });
});