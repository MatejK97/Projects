const sumAll = function (num1, num2) {
  if (!Number.isInteger(num1) || !Number.isInteger(num2)) {
    return 'ERROR';
  }
  if (num1 < 0 || num2 < 0) return 'ERROR';
  let y = num1;
  if (num1 > num2) {
    while (num1 > num2) {
      num1--;
      y += num1;
    }
    return y;
  }
  let x = num1;
  while (num1 < num2) {
    num1++;
    x += num1;
  }
  return x;
};

// Do not edit below this line
module.exports = sumAll;
