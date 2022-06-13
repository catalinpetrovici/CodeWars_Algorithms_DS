// Vowel Count

// Return the number (count) of vowels in the given string.

// We will consider a, e, i, o, u as vowels for this Kata (but not y).

// The input string will only consist of lower case letters and/or spaces.

// STRINGSFUNDAMENTALS

function getCount(str) {
  const wowelsArray = ['a', 'e', 'i', 'o', 'u'];
  let vowelsCount = 0;

  vowelsCount = str
    .split('')
    .filter((item) => wowelsArray.includes(item)).length;

  return vowelsCount;
}

// console.log(getCount('abracadabra'));

// #########################################################

// Sum of all the multiples of 3 or 5

// Your task is to write function findSum.

// Upto and including n, this function will return the sum of all multiples of 3 and 5.

// For example:

// findSum(5) should return 8 (3 + 5)

// findSum(10) should return 33 (3 + 5 + 6 + 9 + 10)

function findSum(n) {
  let accumulator = 0;

  for (let i = 0; i <= n; i++) {
    if (i % 3 !== 0 && i % 5 !== 0) {
      continue;
    }
    accumulator += i;
  }

  return accumulator;
}

console.log(findSum(5));
console.log(findSum(10));
