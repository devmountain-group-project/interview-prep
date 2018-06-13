//Write a function called "fizzBuzz" that takes in a number as a parameter. The function should test the number passed in.
//For numbers that are a multiple of 3, return "Fizz" instead of the number.
//For numbers that are a multiple of 5, return "Buzz" instead of the number.
//For numbers that are both a multiple of 3 and 5, return "FizzBuzz" instead of the number.

module.exports = function(value){
    if(value % 5 == 0 && value % 3 == 0) {
        return 'fizzbuzz'
    } else if (value % 5 == 0) {
        return 'buzz'
    } else if (value % 3 == 0) {
        return 'fizz'
    } else {
        return value
    }
}
