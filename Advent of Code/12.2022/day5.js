const fs = require('fs');

// ###############
// ############### https://adventofcode.com/2022/day/5
// ###############

//  ############################################# Part 1  #############################################

try {
  const supplyStacks = [
    ['B', 'V', 'S', 'N', 'T', 'C', 'H', 'Q'],
    ['W', 'D', 'B', 'G'],
    ['F', 'W', 'R', 'T', 'S', 'Q', 'B'],
    ['L', 'G', 'W', 'S', 'Z', 'J', 'D', 'N'],
    ['M', 'P', 'D', 'V', 'F'],
    ['F', 'W', 'J'],
    ['L', 'N', 'Q', 'B', 'J', 'V'],
    ['G', 'T', 'R', 'C', 'J', 'Q', 'S', 'N'],
    ['J', 'S', 'Q', 'C', 'W', 'D', 'M'],
  ];

  const data = fs
    .readFileSync(`${__dirname}/Day5Input/day5Input.txt`, 'utf8')
    .split('\n');

  data.forEach((row) => {
    [_, move, _, from, _, to] = row.split(' ');

    for (let i = 0; i < move; i++) {
      const supplyFrom = supplyStacks[from - 1].pop();
      supplyStacks[to - 1].push(supplyFrom);
    }
  });

  const cratesAtTheEndOfStacks = [];

  supplyStacks.slice().forEach((stack) => {
    cratesAtTheEndOfStacks.push(stack.pop());
  });

  console.log(cratesAtTheEndOfStacks);

  //
} catch (err) {
  console.error(err);
}

//  ############################################# Part 2 #############################################

try {
  const supplyStacks = [
    ['B', 'V', 'S', 'N', 'T', 'C', 'H', 'Q'],
    ['W', 'D', 'B', 'G'],
    ['F', 'W', 'R', 'T', 'S', 'Q', 'B'],
    ['L', 'G', 'W', 'S', 'Z', 'J', 'D', 'N'],
    ['M', 'P', 'D', 'V', 'F'],
    ['F', 'W', 'J'],
    ['L', 'N', 'Q', 'B', 'J', 'V'],
    ['G', 'T', 'R', 'C', 'J', 'Q', 'S', 'N'],
    ['J', 'S', 'Q', 'C', 'W', 'D', 'M'],
  ];

  const data = fs
    .readFileSync(`${__dirname}/Day5Input/day5Input.txt`, 'utf8')
    .split('\n');

  data.forEach((row) => {
    [_, move, _, from, _, to] = row.split(' ');

    const cratesToMove = [];

    for (let i = 0; i < move; i++) {
      cratesToMove.push(supplyStacks[from - 1].pop());
    }

    cratesToMove.reverse().forEach((crate) => {
      supplyStacks[to - 1].push(crate);
    });
  });

  const cratesAtTheEndOfStacks = [];

  supplyStacks.slice().forEach((stack) => {
    cratesAtTheEndOfStacks.push(stack.pop());
  });

  console.log(cratesAtTheEndOfStacks);

  //
} catch (err) {
  console.error(err);
}
