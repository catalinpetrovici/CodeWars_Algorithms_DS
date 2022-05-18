// Task

// You will be given an array of numbers. You have to sort the odd numbers in ascending order while leaving the even numbers at their original positions.

// Examples
// [7, 1]  =>  [1, 7]
// [5, 8, 6, 3, 4]  =>  [3, 8, 6, 5, 4]
// [9, 8, 7, 6, 5, 4, 3, 2, 1, 0]  =>  [1, 8, 3, 6, 5, 4, 7, 2, 9, 0]

function sortArray(array) {
  const odds = array.filter((x) => x % 2).sort((a, b) => a - b);
  console.log(odds);
  return array.map((x) => (x % 2 ? odds.shift() : x));
}

// console.log(sortArray([7, 1]));
// console.log(sortArray([5, 8, 6, 3, 4]));
// console.log(sortArray([9, 8, 7, 6, 5, 4, 3, 2, 1, 0]));

/////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Your order, please

// Your task is to sort a given string. Each word in the string will contain a single number. This number is the position the word should have in the result.

// Note: Numbers can be from 1 to 9. So 1 will be the first word (not 0).

// If the input string is empty, return an empty string. The words in the input String will only contain valid consecutive numbers.

// Examples
// "is2 Thi1s T4est 3a"  -->  "Thi1s is2 3a T4est"
// "4of Fo1r pe6ople g3ood th5e the2"  -->  "Fo1r the2 g3ood 4of th5e pe6ople"
// ""  -->  ""

function order(words) {
  const length = words.split(' ').length;
  const array = new Array(length).fill('');

  words.split(' ').forEach((word) => {
    const index = word.match(/\d+/);
    array.splice(index - 1, 1, word);
  });
  return array.join(' ');
}

console.log(order('is2 Thi1s T4est 3a'));
console.log(order('4of Fo1r pe6ople g3ood th5e the2'));

//
// ! Solutions of Users I am Following ##########
//

function order(words) {
  return words
    .split(' ')
    .sort(function (a, b) {
      return a.match(/\d/) - b.match(/\d/);
    })
    .join(' ');
}
