const people = [
  { name: 'Catalin Pe', cubes: 12 },
  { name: 'Beatrice An', cubes: 9 },
];

// ?## find max value from an array

const maxCubes = people.reduce((acc, curr) => {
  if (curr.cubes > acc) return curr.cubes;
  return acc;
}, 0);

// => 12

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
