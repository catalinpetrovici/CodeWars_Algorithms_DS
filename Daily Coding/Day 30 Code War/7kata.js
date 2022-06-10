// Count the divisors of a number

// Count the number of divisors of a positive integer n.

// Random tests go up to n = 500000.

// Examples (input --> output)
// 4 --> 3 (1, 2, 4)
// 5 --> 2 (1, 5)
// 12 --> 6 (1, 2, 3, 4, 6, 12)
// 30 --> 8 (1, 2, 3, 5, 6, 10, 15, 30)

function getDivisorsCntRecursion(n, divisorNumber = n, numberOfDivisors = 0) {
  if (divisorNumber === 0) return numberOfDivisors;

  if (n % divisorNumber === 0)
    return getDivisorsCnt(n, (divisorNumber -= 1), (numberOfDivisors += 1));

  return getDivisorsCnt(n, (divisorNumber -= 1), numberOfDivisors);
}

function getDivisorsCnt(n) {
  let numberOfDivisors = 0;
  for (let i = 0; i <= n; i += 1) {
    if (n % i === 0) numberOfDivisors += 1;
  }

  return numberOfDivisors;
}

// console.log(getDivisorsCnt(10));
// console.log(getDivisorsCnt(11));
// console.log(getDivisorsCnt(54));
console.log(getDivisorsCnt(249627));
// console.log(getDivisorsCnt(4));
// console.log(getDivisorsCnt(5));
// console.log(getDivisorsCnt(12));
// console.log(getDivisorsCnt(30));
// console.log(getDivisorsCnt(1));
// console.log(getDivisorsCnt(0));
