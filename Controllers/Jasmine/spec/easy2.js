//SUM OF POSITIVES

//You get an array of numbers, negative and positive. Return the sum of all of the positives ones.

module.exports = function positiveSum(arr) {
  var total = 0;    
  for (i = 0; i < arr.length; i++) {    
    if (arr[i] > 0) {                   
      total += arr[i];                  
    }
  }
  return total;                         
}