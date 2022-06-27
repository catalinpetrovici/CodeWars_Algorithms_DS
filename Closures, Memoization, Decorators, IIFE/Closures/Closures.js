// Lexical Scope defines how variable names are resolved in nested functions.

// Nested (child) function have access to the scope of their parent functions

// This is often confused with closure, but lexical scope is only an important part of closure

// global scope
let x = 1;

const parentFunction = () => {
  //local scope
  let myValue = 2;

  const childFunction = () => {
    console.log((x += 5));
    console.log((myValue += 1));
  };
  childFunction();
};
// parentFunction();

console.log(`~~~~~~~~~~~~~Closure~~~~~~~~~~~~~`);

// A closure is created when we define a function, not when a function is executed

// w3schools: 'A closure is a function having access to the parent scope, event after the parent function has closed.

const parentFunctionClosure = () => {
  //local scope
  let myValue = 2;

  const childFunction = () => {
    console.log((x += 5));
    console.log((myValue += 1));
  };
  return childFunction;
};
const result = parentFunctionClosure();
console.log(result);
result();
result();

// example with IIFE
console.log(`~~~~~~~~~~~~~Closure Example With IIFE~~~~~~~~~~~~~`);

const credits = ((num) => {
  let credits = num;
  console.log(`Initial credits value ${credits}`);

  return () => {
    credits -= 1;
    if (credits > 0)
      console.log(`playing game, ${credits} credits(s) remaining`);
    if (credits <= 0) console.log('not enough credits');
  };
})(3);

credits();
credits();
credits();
