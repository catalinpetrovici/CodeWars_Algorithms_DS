// Is this a triangle?

// Implement a function that accepts 3 integer values a, b, c. The function should return true if a triangle can be built with the sides of given length and false in any other case.

// (In this case, all triangles must have surface greater than 0 to be accepted).

function isTriangle(a, b, c) {
  if (a === 0 || b === 0 || c === 0) return false;
  if (a + b > c && b + c > a && c + a > b) return true;
  return false;
}

// console.log(isTriangle(1, 2, 2)); // true
// console.log(isTriangle(7, 2, 2)); // false

// Solutions of Users I am Following

function isTriangle(a, b, c) {
  return a + b > c && a + c > b && c + b > a;
}

// // #####################################################################################

// String ends with?

// Complete the solution so that it returns true if the first argument(string) passed in ends with the 2nd argument (also a string).

function solution(str, ending) {
  const end = ending.split('');
  const string = str.split('').slice(-ending.length);

  for (let i = 0; i < end.length; i++) {
    if (end[i] !== string[i]) {
      return false;
    }
  }
  return true;
}

console.log(solution('abc', 'bc')); // returns true
console.log(solution('abc', 'd')); // returns false

// Solutions of Users I am Following

function solution(str, ending) {
  return str.endsWith(ending);
}

//// #############################################################################################################

// Testing 1-2-3

// Your team is writing a fancy new text editor and you've been tasked with implementing the line numbering.

// Write a function which takes a list of strings and returns each line prepended by the correct number.

// The numbering starts at 1. The format is n: string. Notice the colon and space in between.

// Examples:

// number([]) // => []
// number(["a", "b", "c"]) // => ["1: a", "2: b", "3: c"]

var number = function (array) {
  return array.map((el, index) => `${index + 1}: ${el}`);
};

console.log(number([]));
console.log(number(['a', 'b', 'c']));
