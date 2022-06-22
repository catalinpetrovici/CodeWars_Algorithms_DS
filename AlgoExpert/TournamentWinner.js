// Tournament Winner

// A tournament just ended and you need to find the winner. Each round has a pair of teams facing off and only one team wins. The winning team is awarded 3 points. Create a function called tournamentWinner that takes two arrays as input and return the winner of the tournament. The first array, called competitions, consists of arrays of two team names that faced each other in the round and will be in the form ["homeTeam", "awayTeam"]. The second argument is an array called results whose elements will be either a 1 or a 0. The same index at both arrays shows the teams that faced off and which of the teams won for that round. For example, at index i, the teams at competitions[i] competed against each other and the team represented by results[i] is the winner from that pair. Note that results[i] will be either a 1 or a 0, with 1 representing a win for the homeTeam, and a 0 representing a win for the awayTeam.

// Given two arrays as input, one an array of team pairs (each element is an array of two strings), and the other an array of integers stating the winner of the pair, return the team with the most points. The winning team in a pairing is awarded 3 points while the other team in the pair is awarded 0 points. The team with the most points after all pairs are considered is the winner of the tournament. Each team pairing from the first array has a home and an away team. The second input array is the results array, contains numbers of either 0 or 1, where 0 means the away team wins in the pair and 1 means the home team wins for the pair.

// ################

// Hash table

// We can use a hash table to keep track of each team's points, because a hash table is used to store key/value pairs
// Hash tables provide constant-time lookup and insertion on average

// Complexity Analysis
// Time Complexity: O(N), where N is the number of competitions.
// Space Complexity: O(K), where K is the number of teams.

function tournamentWinner(competitions, results) {
  const scores = new Map();
  const homeTeamWon = 1;
  const winningPoints = 3;
  let currBestScore = 0;
  let currBestTeam = '';

  for (let i = 0; i < competitions.length; i++) {
    const [homeTeam, awayTeam] = competitions[i];
    const result = results[i];

    const winningTeam = result === homeTeamWon ? homeTeam : awayTeam;
    const currentScore = scores.get(winningTeam) || 0;
    scores.set(winningTeam, currentScore + winningPoints);

    if (currBestScore < currentScore) currBestTeam = winningTeam;
  }

  return currBestTeam;
}

console.log(
  tournamentWinner(
    [
      ['HTML', 'C'],
      ['C', 'Python'],
      ['Python', 'HTML'],
    ],
    [0, 0, 1]
  )
);
