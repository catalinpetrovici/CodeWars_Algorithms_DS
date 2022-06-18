// Task: transform this simple sorting algorithm into a unique sort, meaning that it should
// not return any duplicate values in the sorted array

const uniqSort = function (arr) {
  const breadcrumbs = {}; // cache
  const result = [];

  for (let i = 0; i < arr.length; i += 1) {
    // start loop at 1 as element 0 can never be a duplicate
    if (!breadcrumbs[arr[i]]) {
      // if this is undefined => true
      result.push(arr[i]);
      breadcrumbs[arr[i]] = true;
    }
  }
  console.log(breadcrumbs, result);
  return result.sort((a, b) => a - b);
};

console.log(uniqSort([4, 2, 2, 3, 2, 2, 2])); // [2,3,4]

// this method has a trade-off between, it speeds up our algorithm, but it does something with our space complexity

// time for space
