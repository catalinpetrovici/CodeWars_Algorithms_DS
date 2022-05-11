// Nathan loves cycling.

// Because Nathan knows it is important to stay hydrated, he drinks 0.5 litres of water per hour of cycling.

// You get given the time in hours and you need to return the number of litres Nathan will drink, rounded to the smallest value.

// For example:

// time = 3 ----> litres = 1

// time = 6.7---> litres = 3

// time = 11.8--> litres = 5

function litres(time) {
  return Math.trunc(time * 0.5);
}

// console.log(litres(3));
// console.log(litres(6.7));
// console.log(litres(11.8));

/////////////////////////////////////////////////////////////////////////////////

// A hero is on his way to the castle to complete his mission. However, he's been told that the castle is surrounded with a couple of powerful dragons! each dragon takes 2 bullets to be defeated, our hero has no idea how many bullets he should carry.. Assuming he's gonna grab a specific given number of bullets and move forward to fight another specific given number of dragons, will he survive?

// Return True if yes, False otherwise :)

function hero(bullets, dragons) {
  if (dragons * 2 <= bullets) return true;
  else return false;
}

// console.log(hero(10, 5));
// console.log(hero(7, 4));
// console.log(hero(4, 5));
// console.log(hero(100, 40));
// console.log(hero(1500, 751));
// console.log(hero(01, 1));

///////////////////////////////////////////////////////////////////////////////////

// Complete the square sum function so that it squares each number passed into it and then sums the results together.

// For example, for [1, 2, 2] it should return 9 because 1^2 + 2^2 + 2^2 = 9.

// ! Found 2 solutions

function squareSum(numbers) {
  return numbers.reduce(
    (acc, curr, currI, array) => acc + curr * array[currI],
    0
  );
}

// function squareSumm(numbers) {
//   let sum = 0;
//   numbers.forEach((element, index, array) => {
//     sum += element * array[index];
//   });
//   return sum;
// }

console.log(squareSum([1, 2]));
console.log(squareSum([0, 3, 4, 5]));
console.log(squareSum([]));
