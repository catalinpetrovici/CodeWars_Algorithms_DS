// Delete occurrences of an element if it occurs more than n times

// Enough is enough!
// Alice and Bob were on a holiday. Both of them took many pictures of the places they've been, and now they want to show Charlie their entire collection. However, Charlie doesn't like these sessions, since the motif usually repeats. He isn't fond of seeing the Eiffel tower 40 times.
// He tells them that he will only sit for the session if they show the same motif at most N times. Luckily, Alice and Bob are able to encode the motif as a number. Can you help them to remove numbers such that their list contains each number only up to N times, without changing the order?

// Task
// Given a list and a number, create a new list that contains each number of list at most N times, without reordering.
// For example if the input number is 2, and the input list is [1,2,3,1,2,1,2,3], you take [1,2,3,1,2], drop the next [1,2] since this would lead to 1 and 2 being in the result 3 times, and then take 3, which leads to [1,2,3,1,2,3].
// With list [20,37,20,21] and number 1, the result would be [20,37,21].

function deleteNth(arr, n) {
  for (let i = 0; i <= arr.length; i++) {
    while (arr.filter((item) => item == arr[i]).length > n) {
      arr.splice(arr.lastIndexOf(arr[i]), 1);
    }
  }
  return arr;
}

// console.log(deleteNth([1, 2, 3, 1, 2, 1, 2, 3], 2));
// console.log(deleteNth([20, 37, 20, 21], 1));

/////////////////////////////////////////////////////////////////////////////////////////

// Persistent Bugger.

// Write a function, persistence, that takes in a positive parameter num and returns its multiplicative persistence, which is the number of times you must multiply the digits in num until you reach a single digit.

// For example (Input --> Output):

// 39 --> 3 (because 3*9 = 27, 2*7 = 14, 1*4 = 4 and 4 has only one digit)
// 999 --> 4 (because 9*9*9 = 729, 7*2*9 = 126, 1*2*6 = 12, and finally 1*2 = 2)
// 4 --> 0 (because 4 is already a one-digit number)

function persistence(num, times = 0) {
  if (num.toString().length === 1) return times;

  // prettier-ignore
  return persistence( num.toString().split('').reduce((a, b) => a * b) ,( times += 1 ));
}

console.log(persistence(39));
console.log(persistence(999));
console.log(persistence(4));

// Solutions of Users I am Following

// persistence = (n, c) =>
//   n > 9
//     ? persistence(
//         n
//           .toString()
//           .split('')
//           .reduce((x, y) => x * y),
//         c ? c + 1 : 1
//       )
//     : c
//     ? c
//     : 0;
