const ifElse = (condition, isTrue, isFalse, ...args) => {
  return condition ? isTrue(...args) : isFalse(...args);
};

function isTrue(...x) {
  console.log('True Log:', ...x);
  return true;
}
function isFalse(...x) {
  console.log('False Log:', ...x);
  return false;
}

const result = ifElse(true, isTrue, isFalse, 'hey', 'there');

console.log(result);

// ###################

const increment = (n) => n + 1;
const square = (n) => n * n;

const doMathSoIDontHaveTo = (n, cb) => cb(n);

// console.log(doMathSoIDontHaveTo(5, square));
// console.log(doMathSoIDontHaveTo(5, increment));
