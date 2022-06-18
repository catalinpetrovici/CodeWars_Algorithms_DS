// Task 3: Clean up your global score by moving your cache inside your function.
// pro tip: Use a closure to return a function that you can call later

const memoizedClosureTimesM = (m) => {
  let cache = {};
  return (n) => {
    if (cache[n]) {
      console.log(`Fetching from cache:`, n);
      return cache[n];
    }

    let result = n * m;
    console.log(`Calculating result:`, result);
    cache[n] = result;
    return result;
  };
};

const memoClosureTimes10 = memoizedClosureTimesM(10);

console.log(`~~~~~~~~~~~~Task 3~~~~~~~~~~~~`);
console.log('\n');
console.time('Task 3 calculated execution time');
console.log(`Task 3 calculated value:`, memoClosureTimes10(9)); // calculated
console.timeEnd('Task 3 calculated execution time');

console.log('\n');
console.time('Task 3 cached execution time');
console.log(`Task 3 cached value:`, memoClosureTimes10(9)); // cached
console.timeEnd('Task 3 cached execution time');

console.log('\n');
console.log(`Task 4 calculated value:`, memoClosureTimes10(7)); // cached
console.log(`Task 4 cached value:`, memoClosureTimes10(7)); // cached

console.log('\n');
console.log(`Task 5 calculated value:`, memoClosureTimes10(8)); // cached
console.log(`Task 5 cached value:`, memoClosureTimes10(8)); // cached
