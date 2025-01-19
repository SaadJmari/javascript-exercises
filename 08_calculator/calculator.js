const add = function (a, b) {
  return a + b;
};

const subtract = function (a, b) {
  return a - b;
};

const sum = function (arr) {
  return arr.reduce((total, item) => total + item, 0)
};

const multiply = function (arr) {
  return arr.reduce((total, item) => total * item, 1)
};

const power = function (a, b) {
  return Math.pow(a, b);
};

const factorial = function (a) {
  let total = 1;
  if (a == 0) {
    return total;
  }
  for (let i = a; i > 0; i--) {
    total *= i;
  }
  return total;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
