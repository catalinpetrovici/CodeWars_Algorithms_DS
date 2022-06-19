// Task: Implement bubbleSort!

// sample of arrays to sort

const arrayRandom = [9, 2, 5, 6, 4, 3, 7, 10, 1, 8];
const arrayOrdered = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const arrayReversed = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];

function swap(array, i, j) {
  let temp = array[i];
  array[i] = array[j];
  array[j] = temp;
}

// basic implementation
function bubbleSortBasic(array) {
  let countOuter = 0;
  let countInner = 0;
  let countSwap = 0;

  for (var i = 0; i < array.length; i++) {
    countOuter++;
    for (var j = 1; j < array.length; j++) {
      countInner++;
      if (array[j - 1] > array[j]) {
        countSwap++;
        swap(array, j - 1, j);
      }
    }
  }
  console.log('outer:', countOuter, 'inner:', countInner, 'swap:', countSwap);
  return array;
}

console.log(`~~~~~~~~~~Basic~~~~~~~~~~`);
console.log(`\n Basic: arrayRandom`);
console.log(bubbleSortBasic(arrayRandom.slice()));
console.log(`\n Basic: arrayOrdered`);
console.log(bubbleSortBasic(arrayOrdered.slice()));
console.log(`\n Basic: arrayReversed`);
console.log(bubbleSortBasic(arrayReversed.slice()));

// ########################################################

// ? ### Optimized
function bubbleSort(array) {
  let countOuter = 0;
  let countInner = 0;
  let countSwap = 0;

  let swapped;

  do {
    countOuter++;
    swapped = false;
    for (var i = 0; i < array.length; i++) {
      countInner++;
      if (array[i] && array[i + 1] && array[i] > array[i + 1]) {
        countSwap++;
        swap(array, i, i + 1);
        swapped = true;
      }
    }
  } while (swapped);
  console.log('outer:', countOuter, 'inner:', countInner, 'swap:', countSwap);
  return array;
}

console.log(`~~~~~~~~~~Optimized~~~~~~~~~~`);
console.log(`\n Optimized: arrayRandom`);
console.log(bubbleSort(arrayRandom.slice()));
console.log(`\n Optimized: arrayOrdered`);
console.log(bubbleSort(arrayOrdered.slice()));
console.log(`\n Optimized: arrayReversed`);
console.log(bubbleSort(arrayReversed.slice()));
