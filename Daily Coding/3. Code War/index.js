// Create a function that returns the sum of the two lowest positive numbers given an array of minimum 4 positive integers. No floats or non-positive integers will be passed.

// For example, when an array is passed like [19, 5, 42, 2, 77], the output should be 7.

// [10, 343445353, 3453445, 3453545353453] should return 3453455.

function sumTwoSmallestNumbers(numbers) {
  return numbers
    .filter((number) => number > 0)
    .sort((a, b) => a - b)
    .slice(0, 2)
    .reduce((acc, curr) => acc + curr, 0);
}

console.log(sumTwoSmallestNumbers([19, 5, 42, 2, 77]));

//////////////////////////////////////////////////////////////////////////////

// The museum of incredible dull things
// The museum of incredible dull things wants to get rid of some exhibitions. Miriam, the interior architect, comes up with a plan to remove the most boring exhibitions. She gives them a rating, and then removes the one with the lowest rating.

// However, just as she finished rating all exhibitions, she's off to an important fair, so she asks you to write a program that tells her the ratings of the items after one removed the lowest one. Fair enough.

// Task
// Given an array of integers, remove the smallest value. Do not mutate the original array/list. If there are multiple elements with the same value, remove the one with a lower index. If you get an empty array/list, return an empty array/list.

// Don't change the order of the elements that are left.

// Examples
// * Input: [1,2,3,4,5], output= [2,3,4,5]
// * Input: [5,3,2,1,4], output = [5,3,2,4]
// * Input: [2,2,1,2,1], output = [2,2,2,1]

function removeSmallest(numbers) {
  const arrayNew = numbers.slice();
  //   const min = Math.min(...arrayNew);
  //   const index = arrayNew.indexOf(min);
  //   arrayNew.splice(index, 1);
  arrayNew.splice(arrayNew.indexOf(Math.min(...arrayNew)), 1);
  return arrayNew;
}

console.log(removeSmallest([1, 2, 3, 4, 5]));
console.log(removeSmallest([5, 3, 2, 1, 4]));

//////////////////////////////////////////////////////////////////////////////

// Write a function called repeatStr which repeats the given string string exactly n times.

// repeatStr(6, "I") // "IIIIII"
// repeatStr(5, "Hello") // "HelloHelloHelloHelloHello"

function repeatStr(n, s) {
  let string = '';
  for (let i = 0; i < n; i++) {
    string += s;
  }
  return string;
}

console.log(repeatStr(6, 'I'));

//////////////////////////////////////////////////////////////////////////////

// This kata is about multiplying a given number by eight if it is an even number and by nine otherwise.

function simpleMultiplication(number) {
  return number % 2 === 0 ? number * 8 : number * 9;
}

const storeSimpleMultiplication = [];
for (let i = 0; i < 6; i += 1) {
  storeSimpleMultiplication.push(simpleMultiplication(i));
}

console.log(storeSimpleMultiplication);

//////////////////////////////////////////////////////////////////////////////

// If you can't sleep, just count sheep!!

// Task:
// Given a non-negative integer, 3 for example, return a string with a murmur: "1 sheep...2 sheep...3 sheep...". Input will always be valid, i.e. no negative integers.

var countSheep = function (num) {
  let string = '';
  for (let i = 0; i < num; i += 1) {
    string += `${i + 1} sheep...`;
  }
  return string;
};

console.log(countSheep(0));
console.log(countSheep(1));
console.log(countSheep(2));

//////////////////////////////////////////////////////////////////////////////

// Jaden Smith, the son of Will Smith, is the star of films such as The Karate Kid (2010) and After Earth (2013). Jaden is also known for some of his philosophy that he delivers via Twitter. When writing on Twitter, he is known for almost always capitalizing every word. For simplicity, you'll have to capitalize each word, check out how contractions are expected to be in the example below.

// Your task is to convert strings to how they would be written by Jaden Smith. The strings are actual quotes from Jaden Smith, but they are not capitalized in the same way he originally typed them.

// Example:

// Not Jaden-Cased: "How can mirrors be real if our eyes aren't real"
// Jaden-Cased:     "How Can Mirrors Be Real If Our Eyes Aren't Real"

String.prototype.toJadenCase = function () {
  // assign 'this' keyword to a variable and split String into an array
  const words = this.split(' ');
  const wordsUpper = [];

  //loop through the array changing first character of each item to
  //uppercase & adding it to the remaining letters in each item

  for (const upperLetter of words) {
    wordsUpper.push(
      upperLetter.replace(upperLetter[0], upperLetter[0].toUpperCase())
    );
  }

  //return items joined back together in a string
  return wordsUpper.join(' ');
};

let str = "How can mirrors be real if our eyes aren't real";

console.log(str.toJadenCase());
