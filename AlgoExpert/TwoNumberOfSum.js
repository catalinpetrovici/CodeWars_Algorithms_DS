// Two Number Sum

// Write a function that takes in a non-empty array of distinct integers and an integer representing a target sum. If any two numbers in the input array sum up to the target sum, the function should return them in an array, in sorted order. If no two numbers sum up to the target sum, the function should return an empty array. Assume that there will be at most one pair of numbers summing up to the target sum.

// Sample input: [3, 5, -4, 8, 11, 1, -1, 6], 10
// Sample output:[-1, 11]

const twoNumberSum = (array, targetSum) => {
  const potentialMatch = [];

  for (let i = 0; i < array.length; i += 1) {
    if (potentialMatch.includes(array[i]))
      return [array[i], targetSum - array[i]];

    potentialMatch.push(targetSum - array[i]);
  }

  return [];
};

console.log(twoNumberSum([3, 5, -4, 8, 11, 1, -1, 6], 10));
console.log(twoNumberSum([2, 3, 5, -7, 3, 9, 1, 6], 10));
console.log(twoNumberSum([0, -1, 2, -3, 1], -2));
console.log(twoNumberSum([1, -2, 1, 0, 5], 0));
