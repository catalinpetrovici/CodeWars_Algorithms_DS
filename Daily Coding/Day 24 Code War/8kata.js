// Twice as old

// Your function takes two arguments:

// current father's age (years)
// current age of his son (years)
// Сalculate how many years ago the father was twice as old as his son (or in how many years he will be twice as old).

function twiceAsOld(dadYearsOld, sonYearsOld) {
  let twice = dadYearsOld - sonYearsOld * 2;
  return twice < 0 ? twice * -1 : twice;
}

// console.log(twiceAsOld(36, 7)); // 22
// console.log(twiceAsOld(55, 30)); // 5
// console.log(twiceAsOld(42, 21)); // 0
// console.log(twiceAsOld(22, 1)); // 20
// console.log(twiceAsOld(29, 0)); // 29

////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Basic Mathematical Operations

// Your task is to create a function that does four basic mathematical operations.

// The function should take three arguments - operation(string/char), value1(number), value2(number).
// The function should return result of numbers after applying the chosen operation.

// Examples(Operator, value1, value2) --> output
// ('+', 4, 7) --> 11
// ('-', 15, 18) --> -3
// ('*', 5, 5) --> 25
// ('/', 49, 7) --> 7

function basicOp(operation, value1, value2) {
  if (operation === '+') return value1 + value2;
  if (operation === '-') return value1 - value2;
  if (operation === '*') return value1 * value2;
  if (operation === '/') return value1 / value2;
}

// Solutions of Users I am Following

function basicOp2(operation, value1, value2) {
  return eval(value1 + operation + value2);
}

function basicOp1(operation, value1, value2) {
  var cases = {
    '+': value1 + value2,
    '-': value1 - value2,
    '*': value1 * value2,
    '/': value1 / value2,
  };
  return cases[operation];
}
