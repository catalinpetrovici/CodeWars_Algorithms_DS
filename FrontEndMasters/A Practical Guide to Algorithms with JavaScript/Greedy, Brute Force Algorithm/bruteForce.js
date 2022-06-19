// Write a function, makeChange, that returns an integer that represents the least number of coins that add up to the amount, n

let recursionCounter = 0;
let coins = [10, 6, 1];
// let coins1 = [25, 10, 5];

const makeChange = (value, i) => {
  console.log(`~~~~~~~~~~~~~~`);
  recursionCounter++;
  console.log(`${recursionCounter}: calling ${value} at ${i}`);
  if (value === 0) return 0;
  let minCoins;
  coins.forEach((coin, i) => {
    console.log(coin);
    if (value - coin >= 0) {
      let currMinCoins = makeChange(value - coin, i);
      if (minCoins === undefined || currMinCoins < minCoins) {
        minCoins = currMinCoins;
      }
    }
  });
  console.log(`result:`, minCoins + 1);
  console.log(`~~~~~~~~~~~~~~`);
  return minCoins + 1;
};

console.log(makeChange(12));
