// A vector type

// Write a class Vec that represents a vector in two-dimensional space. It takes x and y parameters (numbers), which it should save to properties of the same name.

// Give the Vec prototype two methods, plus and minus, that take another vector as a parameter and return a new vector that has the sum or difference of the two vectors’ (this and the parameter) x and y values.

// Add a getter property length to the prototype that computes the length of the vector—that is, the distance of the point (x, y) from the origin (0, 0).

class Vec {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  plus(vec) {
    return new Vec(this.x + vec.x, this.y + vec.y);
  }
  minus(vec) {
    return new Vec(this.x - vec.x, this.y - vec.y);
  }
  length() {
    return Math.sqrt(Math.pow(this.x, 2) + Math.pow(this.y, 2));
  }
}

const vecFirst = new Vec(1, 2);
const vecSecond = new Vec(3, 4);

console.log(vecFirst.plus(vecSecond));
// Vec { x: 4, y: 6 }
console.log(vecFirst.minus(vecSecond));
// Vec { x: -2, y: -2 }
console.log(vecFirst.length());
// 2.23606797749979
console.log(vecSecond.length());
// 5

////////////////////////////////////////////////////////////

// Groups
// The standard JavaScript environment provides another data structure called Set. Like an instance of Map, a set holds a collection of values. Unlike Map, it does not associate other values with those—it just tracks which values are part of the set. A value can be part of a set only once—adding it again doesn’t have any effect.

// Write a class called Group (since Set is already taken). Like Set, it has add, delete, and has methods. Its constructor creates an empty group, add adds a value to the group (but only if it isn’t already a member), delete removes its argument from the group (if it was a member), and has returns a Boolean value indicating whether its argument is a member of the group.

// Use the === operator, or something equivalent such as indexOf, to determine whether two values are the same.

class Group {
  constructor() {
    this.arrayGroup = [];
  }

  static from(array) {
    let group = new Group();
    for (let value of array) {
      group.add(value);
    }
    return group;
  }

  has(value) {
    return this.arrayGroup.includes(value);
  }

  add(value) {
    if (this.arrayGroup.includes(value)) return;
    this.arrayGroup.push(value);
  }
  delete(value) {
    if (!this.arrayGroup.includes(value)) return;

    const findIndexOfValue = this.arrayGroup.indexOf(value);
    this.arrayGroup.splice(findIndexOfValue, 1);
  }
}

let group = Group.from([10, 20]);
console.log(group.has(10));
// → true
console.log(group.has(30));
// → false
group.add(10);
group.delete(10);
console.log(group.has(10));
// → false

////////////////////////////////////////////////////////////

// Borrowing a method

// https://medium.com/@ensallee/function-borrowing-in-javascript-4bd671e9d7b4

function findO() {
  var args = Array.prototype.slice.call(arguments);
  return args.filter((a) => a.includes('o'));
}

console.log(findO('orchid', 'tulip', 'rose', 'lilac'));
// => [ 'orchid', 'rose' ]

// In the above example, findO is a variadic function, which means it takes a variable number of arguments. We’ve passed it four strings, and we’d like to see which of those strings contain the letter ‘o’. The arguments object holds those four strings, but we can’t simply call .filter() on arguments because it is not an array. We’re able to convert it into an array, however, by borrowing the .slice method from Array.prototype, and setting this to equal the arguments object. Once it has been converted to an array, we have access to all of the built-in methods on Array.

// There’s no reason for you to force a class to inherit from another if you’re only doing so in order to grant instances of the child class access to a single method. And as I mentioned above, function borrowing keeps you from having to write the same function twice and maintain it in two places, which reduces the risk of bugs.

// The most important practical application of function borrowing pertains to native methods, and specifically, to Array.prototype.slice. There are several list-like data structures that aren’t arrays, and it’s useful to be able to treat them as arrays and operate on them as such. One of the most prevalent list-like data structures that isn’t an array is arguments. The arguments object represents all the parameters passed in to a given (non-arrow) function.
