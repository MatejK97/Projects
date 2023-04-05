const add = function (num1, num2) {
  return num1 + num2;
};

const subtract = function (num1, num2) {
  return num1 - num2;
};

const sum = function (array) {
  let sumOf = 0;
  array.forEach((item) => {
    sumOf += item;
  });
  return sumOf;
};

const multiply = function (array) {
  let x = 1;
  array.forEach((item) => {
    x *= item;
  });
  return x;
};

const power = function (num1, num2) {
  return Math.pow(num1, num2);
};

const factorial = function (num) {
  let answer = 1;
  if (num == 0 || num == 1) return 1;
  else if (num > 1) {
    for (let i = num; i >= 1; i--) {
      answer = answer * i;
    }
    return answer;
  }
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
};
