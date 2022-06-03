// Calculating with Functions

// This time we want to write calculations using functions and get the results. Let's have a look at some examples:

// seven(times(five())); // must return 35
// four(plus(nine())); // must return 13
// eight(minus(three())); // must return 5
// six(dividedBy(two())); // must return 3
// Requirements:

// There must be a function for each number from 0 ("zero") to 9 ("nine")
// There must be a function for each of the following mathematical operations: plus, minus, times, dividedBy
// Each calculation consist of exactly one operation and two numbers
// The most outer function represents the left operand, the most inner function represents the right operand
// Division should be integer division. For example, this should return 2, not 2.666666...:
// eight(dividedBy(three()));

function zero(op) {
  if (!op) return 0;
  else return op(0);
}
function one(op) {
  if (!op) return 1;
  else return op(1);
}
function two(op) {
  if (!op) return 2;
  else return op(2);
}
function three(op) {
  if (!op) return 3;
  else return op(3);
}
function four(op) {
  if (!op) return 4;
  else return op(4);
}
function five(op) {
  if (!op) return 5;
  else return op(5);
}
function six(op) {
  if (!op) return 6;
  else return op(6);
}
function seven(op) {
  if (!op) return 7;
  else return op(7);
}
function eight(op) {
  if (!op) return 8;
  else return op(8);
}
function nine(op) {
  if (!op) return 9;
  else return op(9);
}

function plus(a) {
  return (b) => b + a;
}
function minus(a) {
  return (b) => b - a;
}
function times(a) {
  return (b) => b * a;
}
function dividedBy(a) {
  return (b) => Math.trunc(b / a);
}

// console.log(seven(times(five()))); // 35
// console.log(four(plus(nine()))); // 13
// console.log(four(eight(minus(three())))); // 5
// console.log(six(dividedBy(two()))); // 3
