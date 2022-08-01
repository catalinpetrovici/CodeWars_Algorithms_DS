// reverse a string

function reverse(string) {
  const reversedString = [];
  const lastLetter = string.length - 1;
  for (let i = lastLetter; i >= 0; i -= 1) {
    reversedString.push(string[i]);
  }
  return reversedString.join('');
}

// console.log(reverse(`Hello, world!`));

// OR

// return string.split('').reverse().join('');

// ####

// Create a function that takes a string and returns a new string with duplicates removed

const str = 'This is is a test test string';

// console.log(removeDuplicates2(str));

function removeDuplicates(string) {
  const arrayOfWords = new Set(string.split(' '));
  return [...arrayOfWords].join(' ');
}

function removeDuplicates2(string) {
  const arrayOfWords = [];

  for (let word of string.split(' ')) {
    if (!(arrayOfWords.indexOf(word) === -1)) continue;
    arrayOfWords.push(word);
  }
  return arrayOfWords;
}

// #####

// Without using .flat(), create a function to flatten an array

const exampleArray = [1, 2, [3, 4, [5, [6], 7], 8], 9, 10];

console.log(flattenReduce(exampleArray));

function flatten(array) {
  const storage = [];
  for (let number of array) {
    if (Array.isArray(number)) {
      storage.push(...flatten(number));
    } else storage.push(number);
  }
  return storage;
}

function flattenReduce(arr) {
  return arr.reduce((acc, item) => {
    if (Array.isArray(item)) {
      return acc.concat(flatten(item));
    } else {
      acc.push(item);
      return acc;
    }
  }, []);
}

// #####

// bind Exercise

// change the scope without calling the scope

// Implement Function.prototype.bind()

/*
const foo = function() {
    console.log(this.bar);
}

let baz = foo.bind({bar:'hello'})

baz();
*/

Function.prototype.bind = function (context) {
  const fn = this;
  return function () {
    fn.call(context);
  };
};

function bind(fn, context) {
  return function () {
    fn.call(context);
  };
}

function bind2(fn, context) {
  return function () {
    fn.apply(context, [...args]);
  };
}

// ########

// debounce

//debouncedFn();
//debouncedFn();
//debouncedFn();
//debouncedFn();
//debouncedFn();
function debounce(fn, time) {
  let setTimeoutId;
  return function () {
    if (setTimeoutId) {
      clearInterval(setTimeoutId);
    }

    setTimeoutId = setTimeoutId(() => {
      fn.apply(this, arguments);
      setTimeoutId = null;
    }, time);
  };
}

// throttle
function throttle(fn, time) {
  let setTimeoutId;
  return function () {
    if (setTimeoutId) {
      return;
    }

    setTimeoutId = setTimeoutId(() => {
      fn.apply(this, arguments);
      setTimeoutId = null;
    }, time);
  };
}
