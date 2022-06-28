'use strict';

const people = [
  { name: 'Catalin Pe', cubes: 12 },
  { name: 'Beatrice An', cubes: 9 },
];

// ?## find max & min value from an array

const maxCubes = people.reduce(
  (max, num) => (max > num.cubes ? max : num.cubes),
  0
);
// => 12

const minCubes = people.reduce((min, num) =>
  min < num.cubes ? min : num.cubes
);
// => 9

// ?## create a list of the initials for every single person

const initials = people.reduce((acc, curr, index, arr) => {
  const split = curr.name.split(' ');
  let part = `${split[0][0]}${split[1][0]}`;

  if (index === arr.length - 1) part += '.';
  else part += ', ';

  return acc + part;
}, '');

// => CP, BA.

// ?## average

const averageCubes =
  people.reduce((acc, curr) => acc + curr.cubes, 0) / people.length;

// => 10.5

// ?## Objects

import { cart } from './someDummyData/data.mjs';

// let {totalItems, cartTotal} = cart.reduce(
let total = cart.reduce(
  (total, cartItem) => {
    const { amount, price } = cartItem;
    // count items
    total.totalItems += amount;
    // calculate total sum
    total.cartTotal += amount * price;
    return total;
  },
  { totalItems: 0, cartTotal: 0 }
);

// cartTotal = parseFloat(cartTotal.toFixed(2))
// console.log(totalItems, cartTotal);
// console.log(total);

const url = `https://api.github.com/users/catalinpetrovici24/repos?per_page=100`;

const fetchRepos = async () => {
  const response = await fetch(url);
  const data = await response.json();

  const newData = data.reduce((total, repo) => {
    const { language } = repo;

    if (language) {
      // if exist return + 1 // if not return 1
      total[language] = total[language] + 1 || 1;
    }
    return total;
  }, {});
  console.log(newData);
};
fetchRepos();
