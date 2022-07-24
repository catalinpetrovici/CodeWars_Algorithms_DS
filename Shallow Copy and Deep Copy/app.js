// Shallow copy vs. Deep Copy (clones)

// Shallow Copy

// with the spread operator

const xArray = [1, 2, 3, 4];
const yArray = xArray;

const zArray = [...yArray, 10];
console.log(zArray); // [ 1, 2, 3, 4, 10 ]
console.log(yArray); // [ 1, 2, 3, 4 ]

console.log(xArray === yArray); // true
console.log(yArray === zArray); // false

// With Object.assign()
const tArray = Object.assign([], zArray);
console.log(tArray); // [ 1, 2, 3, 4, 10 ]
console.log(tArray === zArray); // false
tArray.push(11);
console.log(zArray); // [ 1, 2, 3, 4, 10 ]
console.log(tArray); // [ 1, 2, 3, 4, 10, 11 ]

// But if there are nested arrays of objects....
yArray.push([8, 9, 10]);
const vArray = [...yArray];
console.log(vArray); // [ 1, 2, 3, 4, [ 8, 9, 10 ] ]
vArray[4].push(5);
console.log(vArray); // [ 1, 2, 3, 4, [ 8, 9, 10, 5 ] ]
console.log(yArray); // [ 1, 2, 3, 4, [ 8, 9, 10, 5 ] ]
// Nested structural data types still share a reference when you use a shallow copy
// they don't share a reference until the original has a nested structural data type
// shallow copy does not go levels deep when it comes to structural data types
// so any structural data types still share a reference

// Note: Array.from() and slice() create shallow copies, too

// ##

// When it comes to objects, what about Object.freeze()

const scoreObj = {
  first: 44,
  second: 12,
  third: { a: 1, b: 2 },
};

Object.freeze(scoreObj);
scoreObj.third.a = 8;
console.log(scoreObj); // { first: 44, second: 12, third: { a: 8, b: 2 } }
// still able to mutate the object
// Object.freeze() is a shallow freeze

// #

// Deep copy is needed to avoid this

// Several libraries like lodash, Ramda, and others
// have this feature build-in

// one solution in Vanilla JS
// but it doest not work with Dates, functions, undefined, Infinity, RegExps, Maps, Set, Blobs, FileLists, ImageDates, and other complex data types

const newScoreObj = JSON.parse(JSON.stringify(scoreObj));
console.log(newScoreObj); // { first: 44, second: 12, third: { a: 8, b: 2 } }
console.log(newScoreObj === scoreObj); // false

// Instead of using a library, here is a Vanilla JS function

const deepClone = (obj) => {
  if (typeof obj !== 'object' || obj === null) return obj;

  // Create an array of object to hold the values;
  const newObject = Array.isArray(obj) ? [] : {};

  for (let key in obj) {
    const value = obj[key];
    // recursive call for nested objects & arrays
    newObject[key] = deepClone(value);
  }
  return newObject;
};

const newXArray = deepClone(xArray);
console.log(newXArray); // [ 1, 2, 3, 4, [ 8, 9, 10, 5 ] ]
console.log(newXArray === xArray); // false

const myScoreObj = deepClone(scoreObj);
console.log(myScoreObj); // { first: 44, second: 12, third: { a: 8, b: 2 } }
console.log(myScoreObj === scoreObj); // false

// Now we can make a pure function

const pureAddToScoreHistory = (array, score, cloneFunc) => {
  const newArray = cloneFunc(array);
  newArray.push(score);
  return newArray;
};

const pureScoreHistory = pureAddToScoreHistory(xArray, 18, deepClone);
console.log(pureScoreHistory); // [ 1, 2, 3, 4, [ 8, 9, 10, 5 ], 18 ]
console.log(xArray); // [ 1, 2, 3, 4, [ 8, 9, 10, 5 ] ] // Original and never mutated

// Test

const expArray = xArray.slice();
expArray.push(17);
console.log(xArray); // [ 1, 2, 3, 4, [ 8, 9, 10, 5 ] ]
console.log(expArray); // [ 1, 2, 3, 4, [ 8, 9, 10, 5 ], 17 ]
console.log(expArray === xArray); //false
console.log(xArray === expArray); //false

// #####################################################################

// - Shallow copies still share references of nested structures which
// allow for mutation of the original data

// - Object.freeze() is a shallow freeze
