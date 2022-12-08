const fs = require('fs');

// ###############
// ############### https://adventofcode.com/2022/day/8
// ###############

function arrayOfValuesColumn(data, row, start, end) {
  const array = [];
  for (let i = start; i < end; i++) {
    array.push(data[i][row]);
  }
  return array;
}

//  ############################################# Part 1  #############################################

try {
  const mapOfTrees = [];
  const mapOfVisibleTrees = [];

  fs.readFileSync(`${__dirname}/day8Input.txt`, 'utf8')
    .split('\n')
    .map((row) => {
      mapOfTrees.push((row + '').split(''));
    });

  mapOfTrees.forEach((row, indexOfMax) => {
    mapOfVisibleTrees.push([]);
    row.forEach((tree, rowI, rowMap) => {
      let isVisible = false;
      mapOfVisibleTrees[indexOfMax][rowI] = isVisible;

      if (
        indexOfMax === 0 ||
        indexOfMax === mapOfTrees.length - 1 ||
        rowI === 0 ||
        rowI === rowMap.length - 1
      )
        return (mapOfVisibleTrees[indexOfMax][rowI] = true);

      const left = rowMap.slice(0, rowI);
      const right = rowMap.slice(rowI + 1, rowMap.length);

      const up = arrayOfValuesColumn(mapOfTrees, rowI, 0, indexOfMax);
      const down = arrayOfValuesColumn(
        mapOfTrees,
        rowI,
        indexOfMax + 1,
        mapOfTrees.length
      );

      const maxLeft = Math.max(...left);
      const maxRight = Math.max(...right);
      const maxUp = Math.max(...up);
      const maxDown = Math.max(...down);

      if (maxLeft < tree || maxRight < tree || maxUp < tree || maxDown < tree)
        return (mapOfVisibleTrees[indexOfMax][rowI] = true);
    });
  });

  console.log(
    mapOfVisibleTrees.reduce((acc, curr) => {
      const num = curr.reduce((acc, curr) => {
        if (curr) {
          return (acc += 1);
        }
        return acc;
      }, 0);

      return (acc += num);
    }, 0)
  );

  //
} catch (err) {
  console.error(err);
}

//  ############################################# Part 2 #############################################

// try {
//   const data = fs.readFileSync(
//     `${__dirname}/day8Input.txt`,
//     'utf8'
//   ).split('\n');

//   console.log(dataStreamBuffer);
//   //
// } catch (err) {
//   console.error(err);
// }

// ####################################################################
