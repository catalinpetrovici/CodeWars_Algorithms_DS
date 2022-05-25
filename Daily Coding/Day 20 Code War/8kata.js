// Find the first non-consecutive number

const { createPublicKey } = require('crypto');
const { CLIENT_RENEG_LIMIT } = require('tls');

// Your task is to find the first element of an array that is not consecutive.

// By not consecutive we mean not exactly 1 larger than the previous element of the array.

// E.g. If we have an array [1,2,3,4,6,7,8] then 1 then 2 then 3 then 4 are all consecutive but 6 is not, so that's the first non-consecutive number.

// If the whole array is consecutive then return null2.

// The array will always have at least 2 elements1 and all elements will be numbers. The numbers will also all be unique and in ascending order. The numbers could be positive or negative and the first non-consecutive could be either too!

// If you like this Kata, maybe try this one next: https://www.codewars.com/kata/represent-array-of-numbers-as-ranges

// 1 Can you write a solution that will return null2 for both [] and [ x ] though? (This is an empty array and one with a single number and is not tested for, but you can write your own example test. )

// 2
// Swift, Ruby and Crystal: nil
// Haskell: Nothing
// Python, Rust, Scala: None
// Julia: nothing
// Nim: none(int) (See options)

function firstNonConsecutive(arr) {
  if (arr.length <= 1) return null;

  let firstElement = arr[0] - 1;
  let lastElement = 0;

  // prettier-ignore
  return !arr.every((el) => { 
      lastElement = el ;
      return el === (firstElement += 1);
    })
    ? lastElement
    : null;
}

console.log(firstNonConsecutive([1, 2, 3, 4, 6, 7, 8]));
console.log(firstNonConsecutive([1, 3]));
console.log(firstNonConsecutive([1, 2, 3, 4]));

// Solutions of Users I am Following

firstNonConsecutive = (arr) =>
  arr.length == 1
    ? null
    : arr[0] + 1 != arr[1]
    ? arr[1]
    : firstNonConsecutive(arr.slice(1));

////////////////// 33333333333333333333333333333333333333333333333333333

// Sum of positive

// You get an array of numbers, return the sum of all of the positives ones.

// Example [1,-4,7,12] => 1 + 7 + 12 = 20

// Note: if there is nothing to sum, the sum is default to 0.

function positiveSum(arr) {
  return arr.filter((el) => el > 0).reduce((acc, curr) => acc + curr, 0);
}

// Solutions of Users I am Following

function positiveSum(arr) {
  return arr.reduce((a, b) => a + (b > 0 ? b : 0), 0);
}
