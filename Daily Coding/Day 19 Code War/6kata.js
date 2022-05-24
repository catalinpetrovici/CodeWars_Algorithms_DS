// Detect Pangram

// A pangram is a sentence that contains every single letter of the alphabet at least once. For example, the sentence "The quick brown fox jumps over the lazy dog" is a pangram, because it uses the letters A-Z at least once (case is irrelevant).

// Given a string, detect whether or not it is a pangram. Return True if it is, False if not. Ignore numbers and punctuation.

function isPangram(string) {
  const sentence = string.toLowerCase();
  // prettier-ignore
  const alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
  // prettier-ignore
  sentence.split('').forEach((element) => {
      alphabet.indexOf(element) !== -1 ? alphabet.splice(alphabet.indexOf(element), 1) : '';
    });

  return alphabet.length === 0 ? true : false;
}

// console.log(isPangram('The quick brown fox jumps over the lazy dog.'));
// console.log(isPangram('This is not a pangram.'));
// console.log(isPangram('abcdefghijklmopqrstuvwxyz'));
// console.log(isPangram('aaaaaaaaaaaaaaaaaaaaaaaaaa'));
// console.log(isPangram('Cwm fjord bank glyphs vext quiz'));

// Solutions of Users I am Following

function isPangram(string) {
  string = string.toLowerCase();
  return 'abcdefghijklmnopqrstuvwxyz'.split('').every(function (x) {
    return string.indexOf(x) !== -1;
  });
}

function isPangram(string) {
  return 'abcdefghijklmnopqrstuvwxyz'
    .split('')
    .every((x) => string.toLowerCase().includes(x));
}

/////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Build a pile of Cubes

// Your task is to construct a building which will be a pile of n cubes. The cube at the bottom will have a volume of n^3, the cube above will have volume of (n-1)^3 and so on until the top which will have a volume of 1^3.

// You are given the total volume m of the building. Being given m can you find the number n of cubes you will have to build?

// The parameter of the function findNb (find_nb, find-nb, findNb, ...) will be an integer m and you have to return the integer n such as n^3 + (n-1)^3 + ... + 1^3 = m if such a n exists or -1 if there is no such n.

// Examples:
// findNb(1071225) --> 45

// findNb(91716553919377) --> -1

function findNb(m) {
  let volume = 0;
  let cubes;
  for (cubes = 1; volume < m; cubes++) {
    volume += Math.pow(cubes, 3);
  }
  return volume === m ? cubes - 1 : -1;
}

console.log(findNb(1071225));
console.log(findNb(91716553919377));

// Solutions of Users I am Following

function findNb(m) {
  var n = 0;
  while (m > 0) m -= (++n) ** 3;
  return m ? -1 : n;
}
