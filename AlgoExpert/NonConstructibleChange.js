// Non-Constructible Change

// Given an array of positive integers representing the values of coins in your possession, write a function that returns the minimum amount of change (the minimum sum of money) that you cannot create. The given coins can have any positive integer value and aren't necessarily unique (i.e., you can have multiple coins of the same value).

// For example, if you're given coins = [1, 2, 5], the minimum amount of change that you can't create is 4. If you're given no coins, the minimum amount of change that you can't create is 1.

// Sample Input : coins = [5, 7, 1, 1, 2, 3, 22]

// ## Understanding the problem

// We are given an array of positive integers, which represent the values of coins that we have in our possession. The array could have duplicates. We are asked to write a function that returns the minimum amount of change that we cannot create with our coins. For instance, if the input array is [1, 2, 5], the minimum amount of change that we cannot create is 4, since we can create 1, 2, 3 (1 + 2) and 5.

// #### 1

// Complexity Analysis
// Time Complexity: O(N log N) where N is the number of coins. // Because we need to sort the array
// Space Complexity: O(N)

function nonConstructibleChange(array) {
  const arraySorted = array.sort((a, b) => a - b);

  let currentChangeCreated = 0;
  arraySorted.forEach((coin) => {
    if (coin > currentChangeCreated + 1) return currentChangeCreated + 1;

    currentChangeCreated += coin;
  });
  return currentChangeCreated + 1;
}

console.log(nonConstructibleChange([5, 7, 1, 1, 2, 3, 22]));
