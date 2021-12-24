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

  //condition where the result is a draw 
  else {
    return RESULTS.DRAW;
  }
}

//function to get player move
function getPlayerMove() { 
  const playerMove = prompt("Rock, Paper or Scissors?");

  //function to validate player move
  function validatePlayerMove() {
    if(typeof(playerMove) === 'string') {
      const found = MOVES.find(move => move.toLowerCase() === playerMove.toLowerCase());
      return found ?? console.log("Not a valid choice");
    } else {
      console.log("Not a valid choice");
    }
  }
  
  return validatePlayerMove();
}          
      // const found = MOVES.find(move => move.toLowerCase() === playerMove.toLowerCase());
      // if (found) {
      //   console.log("Not a valid move.")
      // }
 
  // console.log(validatePlayerMove());

// console.log(playRound("Rock", computerPlay()));