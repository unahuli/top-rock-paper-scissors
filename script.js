const MOVES = [
      "Rock",
      "Paper",
      "Scissors"
];

//function to generate random move for computer 
function computerPlay() {
  const choice = generateMoveNumber();
  
  //function to generate a random number from 0-2
  function generateMoveNumber() {
    const NUMBER_OF_VALID_MOVES = 3;
    return Math.floor(Math.random() * NUMBER_OF_VALID_MOVES); 
  }
  console.log(MOVES[choice]);
  return MOVES[choice];  
}


//function to play matchup
function playRound(playerSelection, computerSelection) {
  
  //array object to list results
  const RESULTS = {
      WIN: `You won! ${playerSelection} beats ${computerSelection}.`,
      LOSE: `You lose! ${computerSelection} beats ${playerSelection}.`,
      DRAW: `It's a draw! Both used the same move.`
  }

  //Conditions where the player wins
  if (playerSelection === MOVES[0] && computerSelection === MOVES[2]
    || playerSelection === MOVES[1] && computerSelection === MOVES[0]
    || playerSelection === MOVES[2] && computerSelection === MOVES[1]) {
      return RESULTS.WIN;
    }

  //Conditions where the player loses
  else if (playerSelection === MOVES[0] && computerSelection === MOVES[1]
    || playerSelection === MOVES[1] && computerSelection === MOVES[2]
    || playerSelection === MOVES[2] && computerSelection === MOVES[0]) {
      return RESULTS.LOSE;
    }

  else {
    return RESULTS.DRAW;
  }
}

console.log(playRound("Rock", computerPlay()));