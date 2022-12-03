const fs = require('fs');
const indexOfLetters = require('./letterToNumber');

// ###############
// ############### https://adventofcode.com/2022/day/3
// ###############

const getCommonLetter = (rowLetters) => {
  const firstHalf = rowLetters.slice(0, rowLetters.length / 2);
  const secondHalf = rowLetters.slice(rowLetters.length / 2);

  return [...new Set(firstHalf)].filter((letter) =>
    secondHalf.includes(letter)
  );
};

const getCommonLetterRows = (group) => {
  const [firstGroup, secondGroup, thirdGroup] = group;

  const commonLetters = [...new Set(firstGroup)].filter((letter) =>
    secondGroup.includes(letter)
  );

  const commonLetter = [...new Set(commonLetters)].filter((letter) =>
    thirdGroup.includes(letter)
  );

  return commonLetter;
};

const groupTheRows = (items, sizeGroup) => {
  return items.reduce((acc, _, index) => {
    if (index % sizeGroup === 0)
      acc.push(items.slice(index, index + sizeGroup));

    return acc;
  }, []);
};

//  ############################################# Part 1  #############################################

try {
  const data = fs
    .readFileSync(`${__dirname}/inputDay3.txt`, 'utf8')
    .split('\n');

  const storeCommonLetter = [];

  data.forEach((row) => {
    storeCommonLetter.push(getCommonLetter(row));
  });

  const sumOfIndexLetters = storeCommonLetter.reduce((acc, curr) => {
    const indexOfCurrLetter = indexOfLetters[curr];

    return indexOfCurrLetter + acc;
  }, 0);

  console.log(sumOfIndexLetters);

  //
} catch (err) {
  console.error(err);
}

//  ############################################# Part 2 #############################################

try {
  const data = fs
    .readFileSync(`${__dirname}/inputDay3.txt`, 'utf8')
    .split('\n');

  const storeCommonLetter = [];

  const groups = groupTheRows(data, 3);

  groups.forEach((groups) => {
    storeCommonLetter.push(getCommonLetterRows(groups));
  });

  const sumOfIndexLetters = storeCommonLetter.reduce((acc, curr) => {
    const indexOfCurrLetter = indexOfLetters[curr];

    return indexOfCurrLetter + acc;
  }, 0);

  console.log(sumOfIndexLetters);

  //
} catch (err) {
  console.error(err);
}
