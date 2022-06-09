// The highest profit wins!

// Story
// Ben has a very simple idea to make some profit: he buys something and sells it again. Of course, this wouldn't give him any profit at all if he was simply to buy and sell it at the same price. Instead, he's going to buy it for the lowest possible price and sell it at the highest.

// Task
// Write a function that returns both the minimum and maximum number of the given list/array.

// Examples(Input --> Output)
// [1,2,3,4,5] --> [1,5]
// [2334454,5] --> [5, 2334454]
// [1]         --> [1, 1]
// Remarks
// All arrays or lists will always have at least one element, so you don't need to check the length. Also, your function will always get an array or a list, you don't have to check for null, undefined or similar.

function minMax(arr) {
  return [Math.min(...arr), Math.max(...arr)]; // fix me!
}

// #############################################################

// Sum of odd numbers

// Given the triangle of consecutive odd numbers:

//              1
//           3     5
//        7     9    11
//    13    15    17    19
// 21    23    25    27    29
// ...
// Calculate the sum of the numbers in the nth row of this triangle (starting at index 1) e.g.: (Input --> Output)

// 1 -->  1
// 2 --> 3 + 5 = 8

function rowSumOddNumbers(n) {
  let oddNumber = 1;
  const generatedTriangle = [];
  for (let i = 1; i <= n; i++) {
    const generateRow = [];
    for (let j = 0; j < i; j++) {
      generateRow.push(oddNumber);
      oddNumber += 2;
    }
    generatedTriangle.push(generateRow);
  }
  return generatedTriangle[n - 1].reduce((acc, curr) => acc + curr);
}

console.log(rowSumOddNumbers(42));

// Solutions of Users I am Following

// HA HA HA HA HA HA HA HA ! Can't believe

function rowSumOddNumbers(n) {
  return Math.pow(n, 3);
}
