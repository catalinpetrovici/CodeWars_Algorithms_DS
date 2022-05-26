// Parse nice int from char problem

// You ask a small girl,"How old are you?" She always says, "x years old", where x is a random number between 0 and 9.

// Write a program that returns the girl's age (0-9) as an integer.

// Assume the test input string is always a valid string. For example, the test input may be "1 year old" or "5 years old". The first character in the string is always a number.

function getAge(inputString) {
  return +inputString[0];
}

function getAge(inputString) {
  return parseInt(inputString);
}

//////////////////////////////////////////////////////////////////////////////////////////////

// A Needle in the Haystack

// Can you find the needle in the haystack?

// Write a function findNeedle() that takes an array full of junk but containing one "needle"

// After your function finds the needle it should return a message (as a string) that says:

// "found the needle at position " plus the index it found the needle, so:

// findNeedle(['hay', 'junk', 'hay', 'hay', 'moreJunk', 'needle', 'randomJunk'])
// should return "found the needle at position 5" (in COBOL "found the needle at position 6")

function findNeedle(haystack) {
  return `found the needle at position ${haystack.indexOf('needle')}`;
}

/////////////////////////////////////////////////////////////////////////////////////

// Sum without highest and lowest number

// Task
// Sum all the numbers of a given array ( cq. list ), except the highest and the lowest element ( by value, not by index! ).

// The highest or lowest element respectively is a single element at each edge, even if there are more than one with the same value.

// Mind the input validation.

// Example
// { 6, 2, 1, 8, 10 } => 16
// { 1, 1, 11, 2, 3 } => 6
// Input validation
// If an empty value ( null, None, Nothing etc. ) is given instead of an array, or the given array is an empty list or a list with only 1 element, return 0.

function sumArray(array) {
  if (array == null || array.length < 3) return 0;
  const arraySorted = array.sort((a, b) => a - b);
  return (
    arraySorted.reduce((acc, curr) => acc + curr) -
    arraySorted[0] -
    arraySorted[array.length - 1]
  );
}

// prettier-ignore
sumArray = a => a ? a.sort((x, y) => x - y).slice(1, -1).reduce((s, e) => s + e, 0) : 0

console.log(sumArray([6, 2, 1, 8, 10]));
console.log(sumArray([1, 1, 11, 2, 3]));
