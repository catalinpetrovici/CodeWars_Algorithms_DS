// Function 2 - squaring an argument

// Now you have to write a function that takes an argument and returns the square of it.

const square = (x) => {
  return x * x;
};

// ######################################################################

// Rock Paper Scissors!

// Rock Paper Scissors
// Let's play! You have to return which player won! In case of a draw return Draw!.

// Examples(Input1, Input2 --> Output):

// "scissors", "paper" --> "Player 1 won!"
// "scissors", "rock" --> "Player 2 won!"
// "paper", "paper" --> "Draw!"

const rps = (p1, p2) => {
  if (
    (p1 === 'scissors' && p2 === 'paper') ||
    (p1 === 'paper' && p2 === 'rock') ||
    (p1 === 'rock' && p2 === 'scissors')
  )
    return 'Player 1 won!';
  if (
    (p2 === 'scissors' && p1 === 'paper') ||
    (p2 === 'paper' && p1 === 'rock') ||
    (p2 === 'rock' && p1 === 'scissors')
  )
    return 'Player 2 won!';

  return 'Draw!';
};

// Solutions of Users I am Following

const rps1 = (p1, p2) => {
  if (p1 === p2) return 'Draw!';

  var rules = { rock: 'scissors', paper: 'rock', scissors: 'paper' };
  if (p2 === rules[p1]) {
    return 'Player 1 won!';
  } else {
    return 'Player 2 won!';
  }
};

const rps2 = (p1, p2) => {
  if (p1 == p2) return 'Draw!';

  if (p1 == 'rock' && p2 == 'scissors') return 'Player 1 won!';
  else if (p1 == 'scissors' && p2 == 'paper') return 'Player 1 won!';
  else if (p1 == 'paper' && p2 == 'rock') return 'Player 1 won!';
  else return 'Player 2 won!';
};
