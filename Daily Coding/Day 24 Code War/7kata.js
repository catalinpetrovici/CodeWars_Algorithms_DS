// Two to One

// Take 2 strings s1 and s2 including only letters from ato z. Return a new sorted string, the longest possible, containing distinct letters - each taken only once - coming from s1 or s2.

// Examples:
// a = "xyaabbbccccdefww"
// b = "xxxxyyyyabklmopq"
// longest(a, b) -> "abcdefklmopqwxy"

// a = "abcdefghijklmnopqrstuvwxyz"
// longest(a, a) -> "abcdefghijklmnopqrstuvwxyz"

function longest(s1, s2) {
  const array = [...new Set((s1 + s2).split(''))];
  return array.sort().join('');
}

// Solutions of Users I am Following

const longest1 = (s1, s2) => [...new Set(s1 + s2)].sort().join('');

function longest2(s1, s2) {
  return Array.from(new Set(s1 + s2))
    .sort()
    .join('');
}

// console.log(longest('xyaabbbccccdefww', 'xxxxyyyyabklmopq'));

//////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Printer Errors

// In a factory a printer prints labels for boxes. For one kind of boxes the printer has to use colors which, for the sake of simplicity, are named with letters from a to m.

// The colors used by the printer are recorded in a control string. For example a "good" control string would be aaabbbbhaijjjm meaning that the printer used three times color a, four times color b, one time color h then one time color a...

// Sometimes there are problems: lack of colors, technical malfunction and a "bad" control string is produced e.g. aaaxbbbbyyhwawiwjjjwwm with letters not from a to m.

// You have to write a function printer_error which given a string will return the error rate of the printer as a string representing a rational whose numerator is the number of errors and the denominator the length of the control string. Don't reduce this fraction to a simpler expression.

// The string has a length greater or equal to one and contains only letters from ato z.

// Examples:
// s="aaabbbbhaijjjm"
// printer_error(s) => "0/14"

// s="aaaxbbbbyyhwawiwjjjwwm"
// printer_error(s) => "8/22"

function printerError(s) {
  const array = s.split('');
  const arrayLength = array.length;

  // prettier-ignore
  const alphabet = ["n","o","p","q","r","s","t","u","v","w","x","y","z"];
  const intersectionLength = array.filter((letter) =>
    alphabet.includes(letter)
  ).length;

  return `${intersectionLength}/${arrayLength}`;
}

console.log(printerError(`aaabbbbhaijjjm`));
console.log(printerError(`aaaxbbbbyyhwawiwjjjwwm`));

// Solutions of Users I am Following

function printerError1(s) {
  // your code
  var count = 0;
  for (var i = 0; i < s.length; i++) {
    if (s[i] > 'm') {
      count++;
    }
  }
  return count + '/' + s.length;
}

const printerError2 = (s) => `${s.replace(/[a-m]/gi, '').length}/${s.length}`;
