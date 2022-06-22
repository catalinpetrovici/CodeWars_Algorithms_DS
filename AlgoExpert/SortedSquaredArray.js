// Given an integer array nums sorted in non-decreasing order, return an array of the squares of each number sorted in non-decreasing order.

// Example 1:

// Input: nums = [-4,-1,0,3,10]
// Output: [0,1,9,16,100]
// Explanation: After squaring, the array becomes [16,1,0,9,100].
// After sorting, it becomes [0,1,9,16,100].

// Example 2:
// Input: nums = [ -7, -3,  2,   3,  11]
// Output:       [  4,  9,  9,  49, 121]

// Example 3:
// Input: nums = [ 1, 2, 3, 5, 6, 8, 9]
// Output:       [ 1, 4, 9,25,36,64,81]

// Example 4:
// Input: nums =   [ -4,  1,  2]
// After squaring: [ 16,  1,  4]
// Output:         [  1,  4, 16]

// ##############################################

// Brute Force - Non optimal time complexity - simple to implement

// Complexity Analysis
// Time Complexity: O(N log N)
// Space Complexity: O(N)

// 1. Generate squaring array
// 2. Sort the array

const SortedSquaredArrayBruteForce = (array) => {
  return array
    .slice()
    .map((el) => el ** 2)
    .sort((a, b) => a - b);
};

// 4.214ms
console.time('Execution Time: SortedSquaredArrayBruteForce');
console.log(SortedSquaredArrayBruteForce([-4, 1, 2])); // [  1,  4, 16]
console.log(SortedSquaredArrayBruteForce([-7, -3, 2, 3, 11])); // [  4,  9,  9,  49, 121]
console.timeEnd('Execution Time: SortedSquaredArrayBruteForce');

// ##############################################

// Complexity Analysis
// Time Complexity: O(N)
// Space Complexity: O(N)

const SortedSquaredArray = (array) => {
  const newArray = new Array(array.length).fill(null);
  let startIndex = 0;
  let endIndex = array.length - 1;

  for (let i = endIndex; i >= 0; i -= 1) {
    let startValue = Math.abs(array[startIndex]);
    let endValue = Math.abs(array[endIndex]);

    if (endValue > startValue) {
      newArray[i] = endValue ** 2;
      endIndex -= 1;
    } else {
      newArray[i] = startValue ** 2;
      startIndex += 1;
    }
  }

  return newArray;
};

// 0.367ms
console.time('Execution Time: SortedSquaredArray');
console.log(SortedSquaredArray([-4, 1, 2])); // [  1,  4, 16]
console.log(SortedSquaredArray([-7, -3, 2, 3, 11])); // [  4,  9,  9,  49, 121]
console.timeEnd('Execution Time: SortedSquaredArray');
