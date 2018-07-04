const file = require("./problemFile.js")var testArray = [1,7,3,4]

getProductsOfAllIntsExceptAtIndex = (arr) =>{
    var results= []
    for(var i= 0; i<=arr.length; i++){
        var arrWithoutIndex= arr.splice(arr[i], 1);
        console.log('this is arrWithoutIndex', arrWithoutIndex)
        for( var j= 0; j<= arrWithoutIndex.length; j++){
            var first = arrWithoutIndex[j] * arrWithoutIndex[j + 1];
            var second = first * arrWithoutIndex[j+2];
            results.push(second)
        }
    }
    return results
}