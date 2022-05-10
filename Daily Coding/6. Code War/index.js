// Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.

// The output should be two capital letters with a dot separating them.

// It should look like this:

// Sam Harris => S.H

// patrick feeney => P.F

function abbrevName(name) {
  const names = name.split(' ');
  const namesUpper = [];
  for (const upperLetter of names) {
    namesUpper.push(upperLetter[0].toUpperCase());
  }
  return namesUpper.join('.');
}

// console.log(abbrevName('Sam Harris'));
// console.log(abbrevName('patrick feeney'));

// Solutions of Users I am Following
// return name.split(' ').map(i => i[0].toUpperCase()).join('.')

/////////////////////////////////////////////////////////////////////////////////////////////

// Count the number of Duplicates
// Write a function that will return the count of distinct case-insensitive alphabetic characters and numeric digits that occur more than once in the input string. The input string can be assumed to contain only alphabets (both uppercase and lowercase) and numeric digits.

// Example
// "abcde" -> 0 # no characters repeats more than once
// "aabbcde" -> 2 # 'a' and 'b'
// "aabBcde" -> 2 # 'a' occurs twice and 'b' twice (`b` and `B`)
// "indivisibility" -> 1 # 'i' occurs six times
// "Indivisibilities" -> 2 # 'i' occurs seven times and 's' occurs twice
// "aA11" -> 2 # 'a' and '1'
// "ABBA" -> 2 # 'A' and 'B' each occur twice

function duplicateCount(text) {
  const textLowerCase = text.toLowerCase();
  const letterArray = textLowerCase.split('');
  let duplicates = 0;

  letterArray.map((letter, i, a) => {
    if (a.indexOf(letter) !== i && a.lastIndexOf(letter) === i) {
      // prettier-ignore
      console.log(`${a.indexOf(letter)} !== ${i} && ${a.lastIndexOf(letter)} === ${i}, ${a.indexOf(letter) !== i} && ${a.lastIndexOf(letter) === i}`);
      duplicates++;
    }
  });
  return duplicates;
}

// console.log(duplicateCount('abcde'));
// console.log(duplicateCount('aabbcde'));
// console.log(duplicateCount('aabBcde'));
// console.log(duplicateCount('indivisibility'));
// console.log(duplicateCount('Indivisibilities'));
// console.log(duplicateCount('aA11'));
// console.log(duplicateCount('ABBA'));
console.log(
  duplicateCount('ABCDEFGHIJKLMNOPQRSTUVWXYZABCDEFGHIJKLMNOPQRSTUVWXYZ')
);

// ################# Solutions of Users I am Following

function duplicateCount(text) {
  // Convert to uppercase, sorted array
  const sortedarray = text.toUpperCase().split('').sort();
  // Filter Array Based on whether first index of a value - last index is greater than 0
  // and last index matches i (to get unique duplicates), return length
  return sortedarray.filter(
    (val, i, arr) =>
      arr.lastIndexOf(val) - arr.indexOf(val) > 0 && arr.lastIndexOf(val) === i
  ).length;
}

function duplicateCount(text) {
  var dup = [];
  text
    .toLowerCase()
    .split('')
    .forEach(function (v, i, arr) {
      if (i != arr.lastIndexOf(v) && dup.indexOf(v) == -1) dup.push(v);
    });
  return dup.length;
}

function duplicateCount(text) {
  text = text.toLowerCase();
  return [...new Set(text.split(''))].filter(
    (c, i) => text.lastIndexOf(c) > text.indexOf(c)
  ).length;
}

const duplicateCount = (string) => {
  // makes an array all lowercase and sorts the array in alpha order for easy comparrison
  let newString = string.toLowerCase().split('').sort();

  // this array will house the duplicated values so we can
  // get the length of it (or the number of duplicated characters).
  let newArray = [];

  // set a loop for the array
  for (i = 0; i < newString.length; i++) {
    // if the current element equals the following element the push it to the new array AND
    // ONLY if the new array doesn't already include the current element
    if (newString[i] === newString[i + 1] && !newArray.includes(newString[i])) {
      // push elements to new array
      newArray.push(newString[i]);
    }
  }
  // return the number of elements in the array to represent the number characters that were duplicated
  return newArray.length;
};
