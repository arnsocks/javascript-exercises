const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(array) {
	return array.reduce((total, next) => total + next, 0);
};

const multiply = function(array) {
  return array.reduce((product, next) => product * next)
};

const power = function(num, exp) {
	let result = 1;
  for (let i = 0; i < exp; i++) {
    result *= num;
  }
  return result;
};

const factorial = function(num) {
	let components = [];
  for (i = num; i > 0; i--) {
    components.push(i);
  }
  return components.reduce((product, value) => product * value, 1);
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
