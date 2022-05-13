// Convert number to reversed array of digits

// Convert number to reversed array of digits
// Given a random non-negative number, you have to return the digits of this number within an array in reverse order.

// Example:
// 348597 => [7,9,5,8,4,3]
// 0 => [0]

function digitize(n) {
  return [...(n + '')].reverse().map((digit) => +digit);
}

console.log(digitize(348597));
console.log(digitize(34231));
