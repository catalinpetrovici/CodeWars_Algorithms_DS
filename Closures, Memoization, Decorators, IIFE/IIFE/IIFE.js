// IIFE - Immediately-Invoked Function Expression

// #########################################################

// Variations:

// with anonymous arrow function inside:
(() => {
  // do stuff
})();

// with the function keyword:
(function () {
  // do stuff
})();

// with a function name (allows for recursion)
(function myIIFE() {
  num++;
  console.log(num);
  return num !== 5 ? myIIFE(num) : console.log(`Finished!`);
})((num = 0));

// #########################################################

console.log(`~~~~~~~~~~~~~Reason 1~~~~~~~~~~~~~`);
// Reason 1) Does not pollute the global object namespace

// isolate declaration within the function

(() => {
  const x = 'hello!';
  const helloWorld = () => 'Hello World';
  console.log(x, helloWorld());
})();

console.log(`~~~~~~~~~~~~~Reason 2~~~~~~~~~~~~~`);
// Reason 2) Private Variables and Methods from Closure

const increment = (() => {
  let counter = 0;
  console.log(counter);
  const credits = (num) => {
    console.log(`I have ${num} credit(s)`);
    return num;
  };
  return () => {
    counter++;
    credits(counter);
  };
})();

increment(); // I have 1 credit(s)
increment(); // I have 2 credit(s)

console.log(`~~~~~~~~~~~~~Reason 3~~~~~~~~~~~~~`);
// Reason 3) The Module Pattern

const Score = (() => {
  let counter = 0;

  return {
    current: () => {
      return counter;
    },
    increment: () => {
      count++;
    },
    reset: () => {
      count = 0;
    },
  };
})();

// The Revealing Pattern is a variation of the Module Pattern
// The methods are defined in the private namespace and for returning the object we use pointers
const Game = (() => {
  let count = 0;
  const current = () => {
    return `Game score is ${count}`;
  };
  const increment = () => {
    count++;
  };
  const reset = () => {
    count = 0;
  };

  return {
    current: current,
    increment: increment,
    reset: reset,
  };
})();

Game.increment();
console.log(Game.current());

console.log(`~~~~~~~~~~~~~Reason 4~~~~~~~~~~~~~`);
// Reason 4) Infecting a namespace object

((namespace) => {
  namespace.count = 0;
  namespace.current = function () {
    return `App count is ${this.count}`;
  };
  namespace.increment = function () {
    this.count++;
  };
  namespace.reset = function () {
    this.count = 0;
  };
})((global.App = global.App || {}));

App.increment();
console.log(App.current());
