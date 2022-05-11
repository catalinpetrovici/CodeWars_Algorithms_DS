// Find the unique number

// There is an array with some numbers. All numbers are equal except for one. Try to find it!

// findUniq([ 1, 1, 1, 2, 1, 1 ]) === 2
// findUniq([ 0, 0, 0.55, 0, 0 ]) === 0.55
// It’s guaranteed that array contains at least 3 numbers.

// The tests contain some very huge arrays, so think about performance.

// This is the first kata in series:

// Find the unique number (this kata)
// Find the unique string
// Find The Unique

// !Not so good

// function findUniq(arr) {
//   // array with the values that were repeated.
//   // filter the array leaving only the items that their index in the array isn't equal to the index being iterated
//   let repeated = arr.filter((item, index) => arr.indexOf(item) !== index); // [1,1,1,1]
//   // check if the item being iterated is equal to the first element of the repeated array and after that return the first value of the array
//   return arr.filter((item) => item !== repeated[0])[0];
// }

// console.log(findUniq([1, 1, 1, 2, 2, 3, 1, 1]));
// console.log(findUniq([0, 0, 0.55, 0, 0]));

// Solutions of Users I am Following

function findUniqq(arr) {
  arr.sort((a, b) => a - b);
  return arr[0] == arr[1] ? arr.pop() : arr[0];
}

console.log(findUniqq([1, 1, 1, 2, 2, 3, 1, 1]));
console.log(findUniqq([0, 0, 0.55, 0, 0]));

function findUniqqq(arr) {
  return arr.find((n) => arr.indexOf(n) === arr.lastIndexOf(n));
}

console.log(findUniqqq([1, 1, 1, 2, 2, 3, 1, 1]));
console.log(findUniqqq([0, 0, 0.55, 0, 0]));
