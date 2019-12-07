/*
function countWords(inputWords) {
    // SOLUTION GOES HERE
    inputWords.reduce((obj, cur) => {
        obj[cur] = obj[cur]++ || 1;
        return obj;
    }, {})
  }
  
  module.exports = countWords
*/
    

  function countWords(arr) {
    return arr.reduce(function(countMap, word) {
      countMap[word] = ++countMap[word] || 1 // increment or initialize to 1
      return countMap
    }, {}) // second argument to reduce initialises countMap to {}
  }
  
  module.exports = countWords
  
  var inputWords = ['Apple', 'Banana', 'Apple', 'Durian', 'Durian', 'Durian']


  var obj = {
      apple: obj.apple
  }