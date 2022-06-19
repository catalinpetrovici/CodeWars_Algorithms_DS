// Task: Implement linear search.

// ? ### Return first number found

function linearSearchFirst(list, item) {
  for (let i = 0; i < list.length; i += 1) {
    if (item === list[i]) {
      //   console.log(`Found`);
      return i;
    }
    // console.log(`Not Found`);
  }
}

// ? ### Return last number found
function linearSearchLast(list, item) {
  let index = -1;
  for (let i = 0; i < list.length; i += 1) {
    if (item === list[i]) {
      //   console.log(`Found`);
      index = i;
    }
    // console.log(`Not Found`);
  }
  return index;
}

// ? ### Return second number found
function linearSearchNthNumber(list, item, nthNumber = 1) {
  const indexStored = [];
  for (let i = 0; i < list.length; i += 1) {
    if (item === list[i]) {
      indexStored.push(i);
    }
  }
  console.log(indexStored);

  // Not zero based
  return indexStored[nthNumber - 1];
}

console.log(`~~~~~~~~First~~~~~~~~`);
console.log(linearSearchFirst([2, 6, 7, 90, 103, 90], 90));
console.log(`~~~~~~~~Last~~~~~~~~`);
console.log(linearSearchLast([2, 6, 7, 90, 103, 90], 90));
console.log(`~~~~~~~~nthNumber~~~~~~~~`);
console.log(linearSearchNthNumber([2, 6, 7, 90, 103, 90, 90, 90], 90));
