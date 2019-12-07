/*
  checkUsersValid = goodUsers => {
      allUsersValid = submittedUsers => {
          submittedUsers.every(submit => {
              goodUsers.some(good => {
                  return good.id === submit.id;
              })
          })
      }
  }

  module.exports = checkUsersValid

  */

/*
function checkUsersValid(goodUsers) {
    return function(submittedUsers) {
      return submittedUsers.every(function(submit) {
          return goodUsers.some(function(good) {
              return good.id === submit.id;
          })
      })
    };
  }

  module.exports = checkUsersValid
*/
module.exports = function checkUsersValid(goodUsers) {
  return function allUsersValid(submittedUsers) {
    return submittedUsers.every(function(submittedUser) {
      return goodUsers.some(function(goodUser) {
        return goodUser.id === submittedUser.id;
      });
    });
  };
};
