// Two Number Sum

// Write a function that takes in a non-empty array of distinct integers and an integer representing a target sum. If any two numbers in the input array sum up to the target sum, the function should return them in an array, in sorted order. If no two numbers sum up to the target sum, the function should return an empty array. Assume that there will be at most one pair of numbers summing up to the target sum.

// Sample input: [3, 5, -4, 8, 11, 1, -1, 6], 10
// Sample output:[-1, 11]

// #####################
// My Solution => 4.41ms

const twoNumberSum = (array, targetSum) => {
  const potentialMatch = [];

  for (let i = 0; i < array.length; i += 1) {
    if (potentialMatch.includes(array[i]))
      return [array[i], targetSum - array[i]];

    potentialMatch.push(targetSum - array[i]);
  }

  return [];
};

console.time('execution time');
console.log(twoNumberSum([3, 5, -4, 8, 11, 1, -1, 6], 10));
console.log(twoNumberSum([2, 3, 5, -7, 3, 9, 1, 6], 10));
console.log(twoNumberSum([0, -1, 2, -3, 1], -2));
console.log(twoNumberSum([1, -2, 1, 0, 5], 0));
console.timeEnd('execution time');

// #####################################################################

// ########## AlgoExpert Solution

// 2 for => 4.687ms
function twoNumberSum1(array, targetSum) {
  for (let i = 0; i < array.length - 1; i += 1) {
    const firstNum = array[i];

    for (let j = i + 1; j < array.length; j += 1) {
      const secondNum = array[j];
      if (firstNum + secondNum === targetSum) {
        return [firstNum, secondNum].sort((a, b) => a - b);
      }
    }
  }
  return [];
}

// Hash Map 4.925ms
function twoNumberSum2(array, targetSum) {
  const numbers = {};
  for (const num of array) {
    const potentialMatch = targetSum - num;
    if (potentialMatch in numbers) {
      return [potentialMatch, num].sort((a, b) => a - b);
    } else {
      numbers[num] = true;
    }
  }
  return [];
}

// 2 Pointers => 4.737ms
function twoNumberSum3(array, targetSum) {
  array.sort((a, b) => a - b);
  let left = 0;
  let right = array.length - 1;

  while (left < right) {
    const currentSum = array[left] + array[right];
    if (currentSum === targetSum) {
      return [array[left], array[right]];
    } else if (currentSum < targetSum) {
      left++;
    } else if (currentSum > targetSum) {
      right--;
    }
  }
  return [];
}
