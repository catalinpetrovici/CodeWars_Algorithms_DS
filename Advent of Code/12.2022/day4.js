const fs = require('fs');
const indexOfLetters = require('./letterToNumber');

// ###############
// ############### https://adventofcode.com/2022/day/4
// ###############

function isFullyContainTheOther(firstGroup, secondGroup) {
  if (!secondGroup || !firstGroup) return console.log('nono');

  const [firstSection1, lastSection1] = firstGroup.split('-');
  const [firstSection2, lastSection2] = secondGroup.split('-');

  if (+firstSection1 >= +firstSection2 && +lastSection1 <= +lastSection2) {
    return true;
  }
  if (+firstSection1 <= +firstSection2 && +lastSection1 >= +lastSection2) {
    return true;
  }

  return false;
}

function isPartialContainTheOther(firstGroup, secondGroup) {
  if (!secondGroup || !firstGroup) return console.log('nono');

  const [firstSection1, lastSection1] = firstGroup.split('-');
  const [firstSection2, lastSection2] = secondGroup.split('-');

  if (+firstSection1 <= +lastSection2 && +lastSection1 >= +firstSection2)
    return true;

  return false;
}

//  ############################################# Part 1  #############################################

try {
  const data = fs
    .readFileSync(`${__dirname}/Day4Input/day4Input.txt`, 'utf8')
    .split('\n');

  let countOfPairsThatContain = 0;

  data.forEach((row) => {
    const [firstGroup, secondGroup] = row.split(',');

    if (isFullyContainTheOther(firstGroup, secondGroup)) {
      countOfPairsThatContain++;
    }
  });

  console.log(countOfPairsThatContain);

  //
} catch (err) {
  console.error(err);
}

//  ############################################# Part 2  #############################################

try {
  const data = fs
    .readFileSync(`${__dirname}/Day4Input/day4Input.txt`, 'utf8')
    .split('\n');

  let countOfPairsThatContain = 0;

  data.forEach((row) => {
    const [firstGroup, secondGroup] = row.split(',');

    if (isPartialContainTheOther(firstGroup, secondGroup)) {
      countOfPairsThatContain++;
    }
  });

  console.log(countOfPairsThatContain);

  //
} catch (err) {
  console.error(err);
}
