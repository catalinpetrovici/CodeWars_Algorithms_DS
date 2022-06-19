// Task 4: Make your memo function generic and accept the times10 function as a callback rather than defining the n * 10 logic
// inside the if/else or pulling it in from the global score.

// pro tip: Take advantage of the fact that parameters are saved in the closure as well, just like the cache from the previous example.

const times10 = (a) => a * 10;
const times20 = (a) => a * 20;

const memoize = (cb) => {
  let cache = {};
  return (n) => {
    if (cache[n]) {
      console.log(`Fetching from cache:`, n);
      return cache[n];
    }

    let result = cb(n);
    console.log(`Calculating result:`, result);
    cache[n] = result;
    return result;
  };
};

const memoizedTimes10 = memoize(times10);
const memoizedTimes20 = memoize(times20);

console.log(`~~~~~~~~~~~~Task 4~~~~~~~~~~~~`);
console.time('Task 4 calculated execution time');
console.log(`Task 4 calculated value:`, memoizedTimes10(9)); // calculated
console.timeEnd('Task 4 calculated execution time');

console.log('\n');
console.time('Task 4 cached execution time');
console.log(`Task 4 cached value:`, memoizedTimes10(9)); // cached
console.timeEnd('Task 4 cached execution time');

console.log('\n');
console.time('Task 4 calculated execution time');
console.log(`Task 4 calculated value:`, memoizedTimes20(5)); // calculated
console.timeEnd('Task 4 calculated execution time');

console.log('\n');
console.time('Task 4 cached execution time');
console.log(`Task 4 cached value:`, memoizedTimes20(5)); // cached
console.timeEnd('Task 4 cached execution time');
