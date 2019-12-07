function getShortMessages(arr) {
  let newArr = arr.filter(el => el.message.length < 50 ).map(el => el.message);

    return newArr;
};

module.exports = getShortMessages;


module.exports = function getShortMessages(messages) {
    return messages.filter(function(item) {
      return item.message.length < 50
    }).map(function(item) {
      return item.message
    })
  }
  
