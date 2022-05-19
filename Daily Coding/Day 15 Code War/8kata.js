// Century From Year

// Introduction
// The first century spans from the year 1 up to and including the year 100, the second century - from the year 101 up to and including the year 200, etc.

// Task
// Given a year, return the century it is in.

// Examples
// 1705 --> 18
// 1900 --> 19
// 1601 --> 17
// 2000 --> 20

function century(year) {
  const yearArray = [...(year + '')];
  const century = +yearArray.splice(-2).join('');
  return century > 0 ? +yearArray.join('') + 1 : +yearArray.join('');
}

// Solutions of Users I am Following

// const century = (year) => Math.ceil(year / 100);

////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Sentence Smash

// Sentence Smash
// Write a function that takes an array of words and smashes them together into a sentence and returns the sentence. You can ignore any need to sanitize words or add punctuation, but you should add spaces between each word. Be careful, there shouldn't be a space at the beginning or the end of the sentence!

// Example
// ['hello', 'world', 'this', 'is', 'great']  =>  'hello world this is great'

function smash(words) {
  return words.join(' ');
}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Beginner Series #1 School Paperwork

// Your classmates asked you to copy some paperwork for them. You know that there are 'n' classmates and the paperwork has 'm' pages.

// Your task is to calculate how many blank pages do you need. If n < 0 or m < 0 return 0.

// Example:
// n= 5, m=5: 25
// n=-5, m=5:  0
// Waiting for translations and Feedback! Thanks!

function paperwork(n, m) {
  if (n < 0 || m < 0) return 0;

  return n * m;
}

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// How good are you really?

// There was a test in your class and you passed it. Congratulations!
// But you're an ambitious person. You want to know if you're better than the average student in your class.

// You receive an array with your peers' test scores. Now calculate the average and compare your score!

// Return True if you're better, else False!

// Note:
// Your points are not included in the array of your class's points. For calculating the average point you may add your point to the given array!

function betterThanAverage(classPoints, yourPoints) {
  const averageClassPoints =
    classPoints.reduce((acc, curr) => acc + curr, 0) / classPoints.length;

  return averageClassPoints < yourPoints ? true : false;
}

// console.log(betterThanAverage([100, 40, 34, 57, 29, 72, 57, 88], 75));
// console.log(betterThanAverage([41, 75, 72, 56, 80, 82, 81, 33], 50));

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Double Char

// Given a string, you have to return a string in which each character (case-sensitive) is repeated once.

// Examples (Input -> Output):
// * "String"      -> "SSttrriinngg"
// * "Hello World" -> "HHeelllloo  WWoorrlldd"
// * "1234!_ "     -> "11223344!!__  "
// Good Luck!

function doubleChar(str) {
  return [...str].map((el) => el.repeat(2)).join('');
}

// console.log(doubleChar('String'));

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Removing Elements

// Take an array and remove every second element from the array. Always keep the first element and start removing with the next element.

// Example:

// ["Keep", "Remove", "Keep", "Remove", "Keep", ...] --> ["Keep", "Keep", "Keep", ...]

// None of the arrays will be empty, so you don't have to worry about that!

function removeEveryOther(arr) {
  return arr.filter((el, i) => i % 2 === 0);
}

console.log(removeEveryOther(['Keep', 'Remove', 'Keep', 'Remove', 'Keep']));

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Grasshopper - Personalized Message

// Create a function that gives a personalized greeting. This function takes two parameters: name and owner.

// Use conditionals to return the proper message:

// case	return
// name equals owner	'Hello boss'
// otherwise	'Hello guest'

function greet(name, owner) {
  return name === owner ? `Hello boss` : 'Hello guest';
}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Remove exclamation marks

// Write function RemoveExclamationMarks which removes all exclamation marks from a given string.

function removeExclamationMarks(s) {
  return [...s].filter((e) => e !== '!').join('');
}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Third Angle of a Triangle

// You are given two interior angles (in degrees) of a triangle.

// Write a function to return the 3rd.

// Note: only positive integers will be tested.

// https://en.wikipedia.org/wiki/Triangle

function otherAngle(a, b) {
  return 180 - a - b;
}
