const palindromes = function (string) {
  const procString = string.toLowerCase().replace(/[^a-z]/g, '');
  return procString.split('').reverse().join('') == procString;
};

// Do not edit below this line
module.exports = palindromes;
