//declare an array which lists valid moves in the game
// const MOVES = [
//       "Rock",
//       "Paper",
//       "Scissors"
// ];

//declare an array which lists all in-game messages
const MESSAGES = {
  ROUND_PROMPT: "Please enter the number of rounds from 1-10 only. The default is 5 rounds.",
  USER_MOVE_PROMPT: "Rock, Paper or Scissors?",
  CANCELLED: "Game cancelled.",
  INVALID: "Not a valid input."
};

//declare an object array to keep player and computer score
let playersScore = {
  player: 0,
  computer: 0
};

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
  };

  //helper function to display round results
  let displayResults = (results) => {
    console.log(results);
  };

  //helper function to keep tabs on the score  
  let keepScore = (winner) => {
    playersScore[winner]++;
  };

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
function getPlayerMove(e) { 
  //const playerMove = prompt(MESSAGES.USER_MOVE_PROMPT);

  //function to validate player move
  //function validatePlayerMove(playerMove) {

     //if player input is an empty string
    // if (playerMove === '' || playerMove === null) {
    //   console.log(MESSAGES.CANCELLED);
    //   return;
    // }
    //if player input is not null and a string
    //else {

      //change both player input and values in the MOVES array to lowercase to bypass case sensitivity
      // then check if player input matches any value in the array using the array method find
      // pass the value to variable found. value passed is either the matched value in the array or undefined
      // const found = MOVES.find(move => move.toLowerCase() === playerMove.toLowerCase());

      //if the value is defined(any value from the MOVES array), return it 
      //otherwise, return a console log
  //     if (found) {
  //       return found;
  //     } else  {
  //       console.log(MESSAGES.INVALID);
  //       return; 
  //     }

  //   } 
  // }

  //returns player input after validation

  //return validatePlayerMove(playerMove);
  return e.target.value;
}

// function to run the whole game
function game() {
  
  //declare and initialize a variable to control when the game will end
  let gameOngoing = true;

  //create a function to prompt user for the number of rounds
  const getNumberofRounds = () => {

    //prompt user for a number for the number of rounds and pass it to a variable
    const numberOfRounds = prompt (MESSAGES.ROUND_PROMPT, 5)

    //regex expression that accepts numbers from 1 - 10 only
    const ROUNDS_PATTERN = /^(10|[1-9])$/;

    //if user cancels or inputs nothing then set the gameOngoing to false 
    //and let the user know the game is cancelled
    if (numberOfRounds === "" || numberOfRounds === null) {
      console.log(MESSAGES.CANCELLED);
      gameOngoing = false;

    //if user inputs something, check if it matches the regular expression(1-10 numbers only) 
    //then return the input/number of rounds 
    } else if (ROUNDS_PATTERN.test(numberOfRounds)) {
      return numberOfRounds;

    //if user inputs anything but a number then set the gameOngoing to false 
    //and also let the user know that the input was invalid 
    } else {
      console.log(MESSAGES.INVALID);
      gameOngoing = false;
    }
  };

  //exits the game if the flag is set to false
  if (!gameOngoing) {
    return;
  }

  //displays the score via a table format
  let displayScore = () => {
    console.table(playersScore);
  }

  //resets the score back to 0
  const resetScore = () => {
    playersScore.player = 0;
    playersScore.computer = 0;
  }

  //calls the function to prompt user to give a number of rounds then pass it to a variable
  const numberOfRounds = getNumberofRounds();

  //loop over the number of rounds starting from 0th index to the number before the number of rounds
  //can also use i = 1; i <= numberOfRounds
  for (let i = 0; i < numberOfRounds; i++) {

    //call the get player move input function then pass it to a local variable
    const playerMove = getPlayerMove();

    //if player input was actually undefined/cancelled/null, exit the game
    if (!playerMove) {
      return;
    }

    //call the function which decides the computer move
    const computerMove = computerPlay();

    //call the function which matches up the player move agains the computer move
    playRound(playerMove,computerMove);

    //log the current round, i + 1 because our index starts from 0
    console.log(`Round ${i + 1}`);

    //log the player move and the computer move
    console.log(`Player move: ${playerMove}
Computer move: ${computerMove}`);

    //call the function to display the current score in each round
    
    displayScore();               
  }

  //call the function to reset the score after the game ends
  resetScore();
}

// const newLocal = () => {
//   const numberOfRounds = prompt("Please enter the number of rounds from 1-10 only. The default is 5 rounds.", 5);
//   const ROUNDS_PATTERN = /^(10|[1-9])$/;
//   if (numberOfRounds === "" || numberOfRounds === null) {
//     console.log("Game cancelled.");
//     return;
//   } else if (ROUNDS_PATTERN.test(numberOfRounds)) {
//     return numberOfRounds;
//   } else {
//     console.log("Invalid num");
//   }
// };
// console.log(playRound("Rock", computerPlay()));

// let keepScore = (winner) => {
//   playersScore[winner]++;
// }

const playerButtons = document.querySelectorAll('.move');
playerButtons.forEach((playerButton) => {
  playerButton.addEventListener('click', getPlayerMove);
});
console.log(playerButtons);