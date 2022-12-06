const fs = require('fs');

// ###############
// ############### https://adventofcode.com/2022/day/6
// ###############

function detectIndexOfCharBeforeFirstPacket(dataStreamBuffer, occurAfterChar) {
  const lengthOfBuffer = dataStreamBuffer.length;
  for (let i = occurAfterChar; i < lengthOfBuffer; i++) {
    const buffer = [...new Set(dataStreamBuffer.slice(i - occurAfterChar, i))];
    if (buffer.length === occurAfterChar) return i;
  }
}

//  ############################################# Part 1  #############################################

try {
  const dataStreamBuffer = fs.readFileSync(
    `${__dirname}/Day6Input/day6Input.txt`,
    'utf8'
  );

  const occurAfterChar = 4;

  const numberOfCharNeedToBeProcessed = detectIndexOfCharBeforeFirstPacket(
    dataStreamBuffer,
    occurAfterChar
  );

  console.log(numberOfCharNeedToBeProcessed);

  //
} catch (err) {
  console.error(err);
}

//  ############################################# Part 2 #############################################

try {
  const dataStreamBuffer = fs.readFileSync(
    `${__dirname}/Day6Input/day6Input.txt`,
    'utf8'
  );

  const occurAfterChar = 14;

  const numberOfCharNeedToBeProcessed = detectIndexOfCharBeforeFirstPacket(
    dataStreamBuffer,
    occurAfterChar
  );

  console.log(numberOfCharNeedToBeProcessed);
  //
} catch (err) {
  console.error(err);
}
