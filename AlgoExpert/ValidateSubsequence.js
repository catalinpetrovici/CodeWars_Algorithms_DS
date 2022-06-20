// Validate Subsequence

// Given two non-empty arrays of integers, write a function that determines whether
// the second array is a subsequence of the first one.

// A subsequence of an array is a set of numbers that aren't necessarily adjacent in
// the array but that are in the same order as they appear in the array.
// For instance, the numbers [1, 3, 4]  form a subsequence of the array [1, 2, 3, 4]
// , and so do the numbers [2, 4] . Note that a single number in an array and the array itself
// are both valid subsequences of the array.

// Sample Input
// array = [5, 1, 22, 25, 6, -1, 8, 10];
// sequence = [1, 6, -1, 10];

// Sample Output
// true

const validateSubsequenceWhile = (arr, seq) => {
  let arrIndex = 0;
  let seqIndex = 0;
  while (arrIndex !== arr.length && seqIndex !== seq.length) {
    if (arr[arrIndex] === seq[seqIndex]) seqIndex += 1;
    arrIndex += 1;
  }

  return seqIndex === seq.length;
};

const validateSubsequenceFor = (arr, seq) => {
  let seqIndex = 0;
  for (let arrIndex = 0; arrIndex < arr.length; arrIndex += 1) {
    if (seqIndex === seq.length) break;
    if (arr[arrIndex] === seq[seqIndex]) seqIndex += 1;
  }

  return seqIndex === seq.length;
};

// While

console.log(
  validateSubsequenceWhile([5, 1, 22, 25, 6, -1, 8, 10], [1, 6, -1, 10])
); // true
console.log(
  validateSubsequenceWhile([5, 1, 22, 25, 6, -1, 8, 10], [1, 6, -1, 10, 2])
); // false

// For

console.log(
  validateSubsequenceFor([5, 1, 22, 25, 6, -1, 8, 10], [1, 6, -1, 10])
); // true
console.log(
  validateSubsequenceFor([5, 1, 22, 25, 6, -1, 8, 10], [1, 6, -1, 10, 2])
); // false
