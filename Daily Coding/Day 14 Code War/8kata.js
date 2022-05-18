// Can we divide it?

// Your task is to create the functionisDivideBy (or is_divide_by) to check if an integer number is divisible by both integers a and b.

// A few cases:

// (-12, 2, -6)  ->  true
// (-12, 2, -5)  ->  false

// (45, 1, 6)    ->  false
// (45, 5, 15)   ->  true

// (4, 1, 4)     ->  true
// (15, -5, 3)   ->  true

function isDivideBy(number, a, b) {
  return number % a === 0 && number % b === 0 ? true : false;
}

console.log(isDivideBy(-12, 2, -6));
console.log(isDivideBy(-12, 2, -5));

console.log(isDivideBy(45, 1, 6));
console.log(isDivideBy(45, 5, 15));

console.log(isDivideBy(4, 1, 4));
console.log(isDivideBy(15, -5, 3));

//////////////////////////////////////////////////////////////////////////////////////////////////////////

// Are You Playing Banjo?

// Create a function which answers the question "Are you playing banjo?".
// If your name starts with the letter "R" or lower case "r", you are playing banjo!

// The function takes a name as its only argument, and returns one of the following strings:

// name + " plays banjo"
// name + " does not play banjo"
// Names given are always valid strings.

function areYouPlayingBanjo(name) {
  if (name.toLowerCase().split('')[0] === 'r') return `${name} plays banjo`;
  else return `${name} does not play banjo`;
}

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Beginner Series #4 Cockroach

// The cockroach is one of the fastest insects. Write a function which takes its speed in km per hour and returns it in cm per second, rounded down to the integer (= floored).

// For example:

// 1.08 --> 30
// Note! The input is a Real number (actual type is language dependent) and is >= 0. The result should be an Integer.

// FUNDAMENTALS

function cockroachSpeed(s) {
  const sInH = 3600;
  const cmInKm = 1 * 1000 * 100;
  return Math.trunc((s * cmInKm) / sInH);
}
