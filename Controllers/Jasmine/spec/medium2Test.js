
describe('Is Isogram', function() {
  it('Should determine if a string is an Isogram', function() {
    expect(isIsogram('uncopyrightable')).toEqual(true) && expect(isIsogram('telephone')).toEqual(false);
  });
});