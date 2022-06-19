// Task: Implement binary search.

function binarySearch(list, item) {
  let min = 0;
  let max = list.length - 1;
  let guess;

  while (min <= max) {
    guess = Math.floor((min + max) / 2);
    // 2; 2; 3 and Find It;

    if (list[guess] === item) {
      return guess;
    } else {
      if (list[guess] < item) {
        min = guess + 1;
      } else {
        max = guess - 1;
      }
    }
  }
  return -1;
}
console.log(`Binary Search`);
console.log(binarySearch([2, 6, 7, 90, 103, 90], 90));
