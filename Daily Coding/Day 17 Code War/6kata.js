// Consecutive strings

// You are given an array(list) strarr of strings and an integer k. Your task is to return the first longest string consisting of k consecutive strings taken in the array.

// Examples:
// strarr = ["tree", "foling", "trashy", "blue", "abcdef", "uvwxyz"], k = 2

// Concatenate the consecutive strings of strarr by 2, we get:

// treefoling   (length 10)  concatenation of strarr[0] and strarr[1]
// folingtrashy ("      12)  concatenation of strarr[1] and strarr[2]
// trashyblue   ("      10)  concatenation of strarr[2] and strarr[3]
// blueabcdef   ("      10)  concatenation of strarr[3] and strarr[4]
// abcdefuvwxyz ("      12)  concatenation of strarr[4] and strarr[5]

// Two strings are the longest: "folingtrashy" and "abcdefuvwxyz".
// The first that came is "folingtrashy" so
// longest_consec(strarr, 2) should return "folingtrashy".

// In the same way:
// longest_consec(["zone", "abigail", "theta", "form", "libe", "zas", "theta", "abigail"], 2) --> "abigailtheta"
// n being the length of the string array, if n = 0 or k > n or k <= 0 return "" (return Nothing in Elm).

// Note
// consecutive strings : follow one after another without an interruption

function longestConsec(strarr, k) {
  if (k <= 0 || k > strarr.length) return '';
  let lastConsecutive = '';

  for (let i = 0; i < strarr.length; i++) {
    let currentConsecutive = strarr[i];
    for (let j = 1; j <= k; j++) {
      if (strarr[i + j] === undefined || j === k) {
        currentConsecutive += '';
      } else {
        currentConsecutive += strarr[i + j];
      }
      lastConsecutive =
        lastConsecutive.length >= currentConsecutive.length
          ? lastConsecutive
          : currentConsecutive;
    }
  }
  return lastConsecutive;
}

// prettier-ignore
// console.log(longestConsec(['tree', 'foling', 'trashy', 'blue', 'abcdef', 'uvwxyz'], 2));
// // prettier-ignore
// console.log(longestConsec(  ['zone', 'abigail', 'theta', 'form', 'libe', 'zas', 'theta', 'abigail'],  2));
// // prettier-ignore
// console.log(longestConsec(["zone", "abigail", "theta", "form", "libe", "zas"], -2))
// // prettier-ignore
// console.log(longestConsec(["it","wkppv","ixoyx", "3452", "zzzzzzzzzzzz"], 3))
// // prettier-ignore
// console.log(longestConsec(["it","wkppv","ixoyx", "3452", "zzzzzzzzzzzz"], 15))
// prettier-ignore
// console.log(longestConsec(["it","wkppv","ixoyx", "3452", "zzzzzzzzzzzz"], 0));
// prettier-ignore
// console.log(longestConsec(['ejjjjmmtthh','zxxuueeg','aanlljrrrxx','dqqqaaabbb','oocccffuucccjjjkkkjyyyeehh'], 1));
// prettier-ignore
// console.log(longestConsec([ 'it', 'wkppv', 'ixoyx', '3452', 'zzzzzzzzzzzz' ], 15));

// !Solutions of Users I am Following

function longestConsec(strarr, k) {
    var longest = "";
    for(var i=0;k>0 && i<=strarr.length-k;i++){
      var tempArray = strarr.slice(i,i+k);
      var tempStr = tempArray.join("");
      if(tempStr.length > longest.length){
        longest = tempStr;
      }
    }
    return longest;
}

function longestConsec(strarr, k) {
  if (k <= 0 || k > strarr.length) {
    return '';
  }

  return strarr.reduce((long, item, i) => {
    const currString = strarr.slice(i, i + k).join('');
    return currString.length > long.length ? currString : long;
  }, '');
}

function longestConsec(strarr, k) {
  if (strarr.length == 0 || k > strarr.length || k < 1) return '';
  let lens = strarr.map((_, i, arr) => arr.slice(i, i + k).join('').length),
    i = lens.indexOf(Math.max(...lens));
  return strarr.slice(i, i + k).join('');
}
