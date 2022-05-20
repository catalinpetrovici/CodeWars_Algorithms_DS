// Friend or Foe?

// Make a program that filters a list of strings and returns a list with only your friends name in it.

// If a name has exactly 4 letters in it, you can be sure that it has to be a friend of yours! Otherwise, you can be sure he's not...

// Ex: Input = ["Ryan", "Kieran", "Jason", "Yous"], Output = ["Ryan", "Yous"]

// i.e.

// friend ["Ryan", "Kieran", "Mark"] `shouldBe` ["Ryan", "Mark"]
// Note: keep the original order of the names in the output.

function friend(friends) {
  return friends.filter((friend) => friend.length === 4);
}

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Number of People in the Bus

// There is a bus moving in the city, and it takes and drop some people in each bus stop.

// You are provided with a list (or array) of integer pairs. Elements of each pair represent number of people get into bus (The first item) and number of people get off the bus (The second item) in a bus stop.

// Your task is to return number of people who are still in the bus after the last bus station (after the last array). Even though it is the last bus stop, the bus is not empty and some people are still in the bus, and they are probably sleeping there :D

// Take a look on the test cases.

// Please keep in mind that the test cases ensure that the number of people in the bus is always >= 0. So the return integer can't be negative.

// The second value in the first integer array is 0, since the bus is empty in the first bus stop.

var number = function (busStops) {
  const numberGetIn = busStops.reduce((acc, curr) => acc + curr[0], 0);
  const numberGetOut = busStops.reduce((acc, curr) => acc + curr[1], 0);
  return numberGetIn - numberGetOut;
};

// prettier-ignore
console.log(number([  [10, 0],  [3, 5],  [5, 8],]));

// Solutions of Users I am Following

// const number = busStops => busStops.reduce((p,n) => p+n[0]-n[1],0)

// var number = function(busStops){
//     return busStops.map(x => x[0] - x[1]).reduce( (x, y) => x + y);
  }