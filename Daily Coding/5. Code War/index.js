// An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.

// Example: (Input --> Output)

// "Dermatoglyphics" --> true
// "aba" --> false
// "moOse" --> false (ignore letter case)

function isIsogram(str) {
  return (
    str
      .toLowerCase()
      .split('')
      .filter((item, pos, arr) => arr.indexOf(item) == pos).length == str.length
  );
}

/////////////////////////////////////////////////////////////////////////////////

// Timmy & Sarah think they are in love, but around where they live, they will only know once they pick a flower each. If one of the flowers has an even number of petals and the other has an odd number of petals it means they are in love.

// Write a function that will take the number of petals of each flower and return true if they are in love and false if they aren't.

function lovefunc(flower1, flower2) {
  let isEven = (number) => number % 2 === 0;
  let isOdd = (number) => number % 2 !== 0;
  if (
    (isEven(flower1) && isOdd(flower2)) ||
    (isEven(flower2) && isOdd(flower1))
  )
    return true;
  else return false;
}

// Solutions of Users I am Following

return flower1 % 2 !== flower2 % 2;
