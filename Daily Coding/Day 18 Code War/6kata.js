// Tribonacci Sequence

// Well met with Fibonacci bigger brother, AKA Tribonacci.

// As the name may already reveal, it works basically like a Fibonacci, but summing the last 3 (instead of 2) numbers of the sequence to generate the next. And, worse part of it, regrettably I won't get to hear non-native Italian speakers trying to pronounce it :(

// So, if we are to start our Tribonacci sequence with [1, 1, 1] as a starting input (AKA signature), we have this sequence:

// [1, 1 ,1, 3, 5, 9, 17, 31, ...]
// But what if we started with [0, 0, 1] as a signature? As starting with [0, 1] instead of [1, 1] basically shifts the common Fibonacci sequence by once place, you may be tempted to think that we would get the same sequence shifted by 2 places, but that is not the case and we would get:

// [0, 0, 1, 1, 2, 4, 7, 13, 24, ...]
// Well, you may have guessed it by now, but to be clear: you need to create a fibonacci function that given a signature array/list, returns the first n elements - signature included of the so seeded sequence.

// Signature will always contain 3 numbers; n will always be a non-negative number; if n == 0, then return an empty array (except in C return NULL) and be ready for anything else which is not clearly specified ;)

// If you enjoyed this kata more advanced and generalized version of it can be found in the Xbonacci kata

// [Personal thanks to Professor Jim Fowler on Coursera for his awesome classes that I really recommend to any math enthusiast and for showing me this mathematical curiosity too with his usual contagious passion :)]

function tribonacci(signature, n) {
  if (n === 0) return [];
  if (n < 3) return [signature[0]];

  const array = signature;
  for (let i = 0; i < n - 3; i++) {
    array.push(array[i] + array[i + 1] + array[i + 2]);
  }
  return array;
}

// console.log(tribonacci([1, 1, 1], 10)); // [1,1,1,3,5,9,17,31,57,105]
// console.log(tribonacci([0, 0, 1], 10)); // [0,0,1,1,2,4,7,13,24,44]
// console.log(tribonacci([0, 1, 1], 10)); // [0,1,1,2,4,7,13,24,44,81]
// console.log(tribonacci([1, 0, 0], 10)); // [1,0,0,1,1,2,4,7,13,24]
// console.log(tribonacci([0, 0, 0], 10)); // [0,0,0,0,0,0,0,0,0,0]
// console.log(tribonacci([1, 2, 3], 10)); // [1,2,3,6,11,20,37,68,125,230]
// console.log(tribonacci([3, 2, 1], 10)); // [3,2,1,6,9,16,31,56,103,190]
// console.log(tribonacci([1, 1, 1], 1)); // [1]
// console.log(tribonacci([300, 200, 100], 0)); // []
// console.log(tribonacci([0.5, 0.5, 0.5], 30)); // [0.5,0.5,0.5,1.5,2.5,4.5,8.5,15.5,28.5,52.5,96.5,177.5,326.5,600.5,1104.5,2031.5,3736.5,6872.5,12640.5,23249.5,42762.5,78652.5,144664.5,266079.5,489396.5,900140.5,1655616.5,3045153.5,5600910.5,10301680.5]

// ############## Solutions of Users I am Following

// function tribonacci(signature, n) {
//   for (var i = 0; i < n - 3; i++) {
//     // iterate n times
//     signature.push(signature[i] + signature[i + 1] + signature[i + 2]); // add last 3 array items and push to trib
//   }
//   return signature.slice(0, n); //return trib - length of n
// }

// function tribonacci(s, n) {
//   var arr = [];
//   for (var i = 0; i < n; i++) {
//     arr.push(i < 3 ? s[i] : arr[i - 1] + arr[i - 2] + arr[i - 3]);
//   }
//   return arr;
// }

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Highest Scoring Word

// Given a string of words, you need to find the highest scoring word.

// Each letter of a word scores points according to its position in the alphabet: a = 1, b = 2, c = 3 etc.

// You need to return the highest scoring word as a string.

// If two words score the same, return the word that appears earliest in the original string.

// All letters will be lowercase and all inputs will be valid.

function high(x) {
  // prettier-ignore
  const alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];

  const arrayOfWords = x.split(' ');
  const score = arrayOfWords.map((word) =>
    word
      .split('')
      .reduce(
        (acc, curr) => acc + alphabet.findIndex((el) => el === curr) + 1,
        0
      )
  );
  const findMax = Math.max(...score);
  const indexOfMax = score.indexOf(findMax);
  return arrayOfWords[indexOfMax];
}

console.log(high('man i need a taxi up to ubud')); // taxi
console.log(high('what time are we climbing up the volcano')); // volcano
console.log(high('take me to semynak')); // semynak
console.log(high('aa b')); // aa
console.log(high('b aa')); // b
console.log(high('bb d')); // bb
console.log(high('d bb')); // d
console.log(high('aaa b')); // aaa

// Solutions of Users I am Following

function high(s) {
  let as = s
    .split(' ')
    .map((s) => [...s].reduce((a, b) => a + b.charCodeAt(0) - 96, 0));
  return s.split(' ')[as.indexOf(Math.max(...as))];
}

//

function high(words) {
  const alpha = ' abcdefghijklmnopqrstuvwxyz';
  const score = (word) =>
    word.split('').reduce((a, b) => a + alpha.indexOf(b), 0);

  return words
    .split(' ')
    .map((word, pos) => ({ word: word, pos: pos, score: score(word) }))
    .sort((a, b) => a.score - b.score || b.pos - a.pos)
    .pop().word;
}
