const reverseString = function(string) {
  let response = '';
  for (let i = string.length; i >= 0 ; i--) {
    response += string.slice(i, i + 1);
  }
  return response;
};

// Do not edit below this line
module.exports = reverseString;
