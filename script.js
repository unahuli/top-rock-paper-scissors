const MOVES = [
      "Rock",
      "Paper",
      "Scissors"
];

let playersScore = {
  player: 0,
  computer: 0
}

//function to generate random move for computer 
function computerPlay() {
  const choice = generateMoveNumber();
  
  //function to generate a random number from 0-2
  function generateMoveNumber() {
    const NUMBER_OF_VALID_MOVES = 3;
    return Math.floor(Math.random() * NUMBER_OF_VALID_MOVES); 
  }
  // console.log(MOVES[choice]);
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

  let displayResults = (results) => {
    console.log(results);
  };

  let keepScore = (winner) => {
    playersScore[winner]++;
  }

  //Conditions where the player wins
  if (playerSelection === MOVES[0] && computerSelection === MOVES[2]
    || playerSelection === MOVES[1] && computerSelection === MOVES[0]
    || playerSelection === MOVES[2] && computerSelection === MOVES[1]) {
      displayResults(RESULTS.WIN);
      keepScore("player");
    }

  //Conditions where the player loses
  else if (playerSelection === MOVES[0] && computerSelection === MOVES[1]
    || playerSelection === MOVES[1] && computerSelection === MOVES[2]
    || playerSelection === MOVES[2] && computerSelection === MOVES[0]) {
      displayResults(RESULTS.LOSE);
      keepScore("computer");
    }

  //condition where the result is a draw 
  else {
    displayResults(RESULTS.DRAW);
  }

  
}

//function to get player move
function getPlayerMove() { 
  const playerMove = prompt("Rock, Paper or Scissors?");

  //function to validate player move
  function validatePlayerMove(playerMove) {

     //if player input is an empty string
    if (playerMove === '' || playerMove === null) {
      console.log("Game cancelled.");
      return;
    }
    //if player input is not null and a string
    else {

      //change both player input and values in the MOVES array to lowercase to bypass case sensitivity
      // then check if player input matches any value in the array using the array method find
      // pass the value to variable found. value passed is either the matched value in the array or undefined
      const found = MOVES.find(move => move.toLowerCase() === playerMove.toLowerCase());

      //if the value is defined(any value from the MOVES array), return it otherwise, return a console log
      if (found) {
        return found;
      } else  {
        console.log("Not a valid choice");
        return; 
      }

    } 
  }

  return validatePlayerMove(playerMove);
}

function game() {
  let gameOngoing = true;

  const getNumberofRounds = () => {
    const numberOfRounds = prompt ("Please enter the number of rounds from 1-10 only. The default is 5 rounds.", 5)
    const ROUNDS_PATTERN = /^(10|[1-9])$/;
    if (numberOfRounds === "" || numberOfRounds === null) {
      console.log("Game cancelled.");
      gameOngoing = false;
    } else if (ROUNDS_PATTERN.test(numberOfRounds)) {
      return numberOfRounds;
    } else {
      console.log("Invalid num");
      gameOngoing = false;
    }
  };
  if (!gameOngoing) {
    return;
  }

  let displayScore = () => {
    console.table(playersScore);
  }

  const numberOfRounds = getNumberofRounds();
  for (let i = 0; i < numberOfRounds; i++) {
    const playerMove = getPlayerMove();
    if (!playerMove) {
      return;
    }
    const computerMove = computerPlay();
    console.log(`Round ${i + 1}`);
    console.log(`Player move: ${playerMove}
Computer move: ${computerMove}`);
    playRound(playerMove,computerMove);
    displayScore();               
  }
}

const getNumberofRounds = () => {
  const numberOfRounds = prompt ("Please enter the number of rounds from 1-10 only. The default is 5 rounds.", 5)
  const ROUNDS_PATTERN = /^(10|[1-9])$/;
  if (numberOfRounds === "" || numberOfRounds === null) {
    console.log("Game cancelled.");
    return;
  } else if (ROUNDS_PATTERN.test(numberOfRounds)) {
    return numberOfRounds;
  } else {
    console.log("Invalid num");
  }
};
// console.log(playRound("Rock", computerPlay()));

let keepScore = (winner) => {
  playersScore[winner]++;
}