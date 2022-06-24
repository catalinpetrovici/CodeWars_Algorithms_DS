// Task 1: Write a function, times10, that takes an argument, n, and multiplies n times 10
// a simple multiplication fn
const times10 = (a) => a * 10;

console.log(`~~~~~~~~~~~~Task 1~~~~~~~~~~~~`);
console.log(`times10 returns:`, times10(9));

// Task 2: Use an object to cache the result o f your times10 function.
// pro tip 1: Create a function that checks if the value for n has been calculated before.
// pro tip 2: If the value for n has not been calculated, calculate and than save the result in the cache object

const cache = {};
const memoTimes10 = (n) => {
  //   if (n in cache) {
  //     console.log(`Fetching from cache:`, n);
  //     return cache[n];
  //   }

  if (cache[n]) return cache[n];

  let result = times10(n);
  cache[n] = result;
  console.log(cache);
  return result;
};

// console.log('\n');
// console.log(`~~~~~~~~~~~~Task 2~~~~~~~~~~~~`);
// console.time('Task 2 calculated execution time');
// console.log(`Task 2 calculated value:`, memoTimes10(9)); // calculated
// console.timeEnd('Task 2 calculated execution time');

// console.log('\n');
// console.time('Task 2 cached execution time');
// console.log(`Task 2 cached value:`, memoTimes10(9)); // cached
// console.timeEnd('Task 2 cached execution time');

// #### Decorators

function loggingDecorator(wrapperFn, y) {
  let task = y;
  return {
    store: function store(x) {
      const cached = cache[x] ? 'cached' : 'calculated';

      console.log(`~~~~~~~~~~~~Task ${task}~~~~~~~~~~~~`);
      console.time(`Task ${task} ${cached} execution time`);
      const result = wrapperFn(x);
      console.log(`Task ${task} ${cached} value:`, result);
      console.timeEnd(`Task ${task} ${cached} execution time`);

      task++;
    },

    getTask: function getTask() {
      console.log(task);
      return task;
    },
  };
}

const wrappedCached = loggingDecorator(memoTimes10, 2);

wrappedCached.store(9);
wrappedCached.store(9);
wrappedCached.store(9);
wrappedCached.store(10);
