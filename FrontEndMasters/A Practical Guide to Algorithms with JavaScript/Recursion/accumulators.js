//

function joinElements(array, joinString) {
  function recurse(index, resultSoFar) {
    resultSoFar += array[index];

    if (index === array.length - 1) return resultSoFar;
    else return recurse(index + 1, resultSoFar + joinString);
  }
  return recurse(0, '');
}

// console.log(joinElements(['s', 'cr', 't cod', ' :) :)'], 'e'));

// Task: rewrite this function so that is uses a loop rather than recursion

function joinElements(array, joinString) {
  let resultSoFar = '';

  for (let i = 0; i < array.length - 1; i += 1) {
    resultSoFar += array[i] + joinString;
  }
  return resultSoFar + array[array.length - 1];
}

// ## Write recursive factorial method

function recursiveFactorial(n) {
  if (n === 0) return 1;

  return n * recursiveFactorial(n - 1);
}

//

function tailRecursiveFactorial(n, i = 0, result = 1) {
  if (i === n) return result;

  i += 1;
  return recursiveFactorial(n, i, i * result);
}

// console.log(recursiveFactorial(0));
// console.log(recursiveFactorial(1));
// console.log(recursiveFactorial(2));
// console.log(recursiveFactorial(3));
// console.log(recursiveFactorial(4));
// console.log(recursiveFactorial(5));
// console.log(recursiveFactorial(12));

// ##############################

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

const factorial = memoize(recursiveFactorial);

// const factorial = memoize((x) => {
//   if (x === 0) return 1;
//   return x * recursiveFactorial(x - 1);
// });

console.log(factorial(5)); // calculated
console.log(factorial(6)); // calculated for 6 and cached for 5
