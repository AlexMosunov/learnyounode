/*
function countWords(inputWords) {
    var result = {};
    inputWords.reduce(function(prev, current, idx, arry) {
        if(!result[current]) {
            result[current] = 1;
        } else {
            result[current]++;
        }
        return current;
    }, null);
    return result;
  }
  
  module.exports = countWords
  */

function reduce(arr, fn, initial) {
  return (function reduceOne(index, value) {
    if (index > arr.length - 1) return value; // end condition
    return reduceOne(index + 1, fn(value, arr[index], index, arr)); // calculate & pass values to next step
  })(0, initial); // IIFE. kick off recursion with initial values
}

module.exports = reduce;
