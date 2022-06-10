// Is the string uppercase?

// Is the string uppercase?
// Task
// Create a method to see whether the string is ALL CAPS.

// Examples (input -> output)
// "c" -> False
// "C" -> True
// "hello I AM DONALD" -> False
// "HELLO I AM DONALD" -> True
// "ACSKLDFJSgSKLDFJSKLDFJ" -> False
// "ACSKLDFJSGSKLDFJSKLDFJ" -> True
// In this Kata, a string is said to be in ALL CAPS whenever it does not contain any lowercase letter so any string containing no letters at all is trivially considered to be in ALL CAPS.

String.prototype.isUpperCase = function () {
  return this.split('').every((letter) => letter === letter.toUpperCase());
};

// console.log('hello I AM DONALD'.isUpperCase());
// console.log('HELLO I AM DONALD'.isUpperCase());

// Solutions of Users I am Following

String.prototype.isUpperCase1 = function () {
  return this.toUpperCase() === this.toString();
};

// ############################################################

// What's the real floor?

// Americans are odd people: in their buildings, the first floor is actually the ground floor and there is no 13th floor (due to superstition).

// Write a function that given a floor in the american system returns the floor in the european system.

// With the 1st floor being replaced by the ground floor and the 13th floor being removed, the numbers move down to take their place. In case of above 13, they move down by two because there are two omitted numbers below them.

// Basements (negatives) stay the same as the universal level.

// More information here

// Examples
// 1  =>  0
// 0  =>  0
// 5  =>  4
// 15  =>  13
// -3  =>  -3

function getRealFloor(n) {
  if (n <= 0) return n;

  if (n > 13) return n - 2;

  return n - 1;
}

console.log(getRealFloor(15)); // 13
console.log(getRealFloor(-3)); // -3
console.log(getRealFloor(5)); // 4
console.log(getRealFloor(1)); // 0
console.log(getRealFloor(0)); // 0
