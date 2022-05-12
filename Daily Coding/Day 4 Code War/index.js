// Consider an array/list of sheep where some sheep may be missing from their place. We need a function that counts the number of sheep present in the array (true means present).

// For example,

// [true,  true,  true,  false,
//   true,  true,  true,  true ,
//   true,  false, true,  false,
//   true,  false, false, true ,
//   true,  true,  true,  true ,
//   false, false, true,  true]
// The correct answer would be 17.

// Hint: Don't forget to check for bad values like null/undefined

// prettier-ignore
const array = [
    true,true,false,true,
    true,true,true,true,
    true,false,true,false,
    true,false,false,true,
    true,true,true,true,
    false,false,true,true,
];

function countSheeps(arrayOfSheep) {
  return arrayOfSheep.filter(Boolean).length;
}

// console.log(countSheeps(array));

/////////////////////////////////////////////////////////////////////////////////

// Given an array of integers your solution should find the smallest integer.

// For example:

// Given [34, 15, 88, 2] your solution will return 2
// Given [34, -345, -1, 100] your solution will return -345
// You can assume, for the purpose of this kata, that the supplied array will not be empty.

class SmallestIntegerFinder {
  findSmallestInt(args) {
    return args.sort((a, b) => a - b)[0];
  }
}

// Solutions of Users I am Following
// 1. return Math.min(...args);
// 2. return Math.min.apply(null, args);

const sort = new SmallestIntegerFinder();

// console.log(sort.findSmallestInt([34, 15, 88, 2]));
// console.log(sort.findSmallestInt([34, -345, -1, 100]));

/////////////////////////////////////////////////////////////////////////////////

// Given an array of integers.

// Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers. 0 is neither positive nor negative.

// If the input is an empty array or is null, return an empty array.

// Example
// For input [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15], you should return [10, -65].

function countPositivesSumNegatives(input) {
  let positive = 0;
  let negative = 0;

  if (!input) return [];

  input.forEach((element) => {
    if (element <= 0) negative += element;
    if (element > 0) positive += 1;
  });

  if (positive || negative) return [positive, negative];
  else return [];
}

// Solutions of Users I am Following
// prettier-ignore
// return input && input.length ? [input.filter(p => p > 0).length, input.filter(n => n < 0).reduce((a, b) => a + b, 0)] : [];

// prettier-ignore
// console.log(countPositivesSumNegatives([0, 2, 3, 0, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14]));

//////////////////////////////////////////////////////////////////////////////////////////

// Given an array of integers, return a new array with each value doubled.

// For example:

// [1, 2, 3] --> [2, 4, 6]

function maps(x) {
  return x.map((element) => element * 2);
}

// brain damage Solution // HOW FUNNY

// const head = xs => xs[0];
// const tail = xs => {
//   const [h, ...rest] = xs;
//   return rest;
// };

// // recursive curried reduce
// const reduce = f => acc => xs =>
//     xs.length === 0
//       ? acc
//       : reduce (f) (f (acc, head (xs))) (tail (xs));

// // define map in terms of reduce
// const map = f => xs => reduce ((acc, x) => acc.concat (f (x))) ([]) (xs)

// // define a function to double a number
// const double = x => x * 2;

// // define the function that maps the array items to their doubled counterparts
// const maps = map (double)
