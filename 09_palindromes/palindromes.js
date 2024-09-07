const palindromes = function (string) {
  const alphanumerical = 'abcdefghijklmnopqrstuvwxyz0123456789';

  return sanitize(string) === reverse(sanitize(string));

  function sanitize(string) {
    return string
      .toLowerCase()
      .split('')
      .filter(character => alphanumerical.includes(character))
      .join('')
  }
  
  function reverse(string) {
    return string
      .split('')
      .reverse()
      .join('');
  }
};

// Do not edit below this line
module.exports = palindromes;
