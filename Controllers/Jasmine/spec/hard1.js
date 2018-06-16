//CONVERT STRING TO CAMEL CASE 

// Complete the method/function so that it converts dash/underscore delimited words into camel casing. The first word within the output should be capitalized only if the original word was capitalized.

//Here are examples
// toCamelCase("the-stealth-warrior")  returns "theStealthWarrior"

// toCamelCase("The_Stealth_Warrior")  returns "TheStealthWarrior"

module.exports = function toCamelCase(str){
  return str.replace(/[-_](.)/g, (_, c) => c.toUpperCase());
}