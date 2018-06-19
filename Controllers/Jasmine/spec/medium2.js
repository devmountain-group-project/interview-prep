//ISOGRAM

//An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.

module.exports = function isIsogram(str){
  const counts = {};

  for (let i = 0; i < str.length; i++) {
    const letter = str[i].toLowerCase();
    if (!counts[letter]) {
      counts[letter] = 1;
    } else {
      return false;
    }
  }
  return true;
}