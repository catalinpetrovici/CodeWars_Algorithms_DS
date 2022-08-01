// Create a sleep function that takes on parameter (time) and
// will wait 'time'ms

function sleep(time) {
  return new Promise((resolve, _reject) => {
    setTimeout(() => {
      resolve();
    }, time);
  });
}

async function run() {
  console.log('hey');
  await sleep(2000);
  console.log('hello');
}

run();

// promisify

// const exampleFn = function(x,y,callback) {}
// const promisedFn = promisify(exampleFn)
// promisedFn().then(...).then(...)

function promisify(fn) {
  return function (...args) {
    return new Promise((resolve, _reject) => {
      function cb(result) {
        resolve(result);
      }
      fn.apply(this, args.concat(cb));
    });
  };
}
