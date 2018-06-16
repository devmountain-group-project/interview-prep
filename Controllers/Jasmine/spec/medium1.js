//VOWEL  COUNT

//Return the number (count) of vowels in the given string.
//We will consider a, e, i, o, and u as vowels for this Kata.
//The input string will only consist of lower case letters and/or spaces.

module.exports = function getCount(str) {
  var vowelsCount = 0;
  
  for (let i = 0; i < str.length; i++) {
    const currentLetter = str[i];
    if (currentLetter == 'a' || currentLetter == 'e' || currentLetter == 'i' || currentLetter == 'o' || currentLetter == 'u') {
      vowelsCount++;
    }
  }
  
  return vowelsCount;
}