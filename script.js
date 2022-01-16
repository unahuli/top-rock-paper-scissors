//declare an array which lists valid moves in the game
const MOVES = [
  "Rock",
  "Paper",
  "Scissors"
];

//declare round number
let roundNum = 0;

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
function playRound(playerMove, computerMove) {

  //array object to list results
  const RESULTS = {
      WIN: `You won! ${playerMove} beats ${computerMove}.`,
      LOSE: `You lose! ${computerMove} beats ${playerMove}.`,
      DRAW: `It's a draw! Both used the same move.`
  };

  //helper function to display round results
  let displayResults = (results) => {

    roundOutcome.textContent = results;
    displayRound.after(roundOutcome);
  };

  //helper function to keep tabs on the score  
  let keepScore = (winner) => {
    playersScore[winner]++;
  };

  //Conditions where the player wins
  if (playerMove === MOVES[0] && computerMove === MOVES[2]
    || playerMove === MOVES[1] && computerMove === MOVES[0]
    || playerMove === MOVES[2] && computerMove === MOVES[1]) {
      displayResults(RESULTS.WIN);
      keepScore("player");
    }

  //Conditions where the player loses
  else if (playerMove === MOVES[0] && computerMove === MOVES[1]
    || playerMove === MOVES[1] && computerMove === MOVES[2]
    || playerMove === MOVES[2] && computerMove === MOVES[0]) {
      displayResults(RESULTS.LOSE);
      keepScore("computer");
    }

  //condition where the result is a draw 
  else {
    displayResults(RESULTS.DRAW);
  }

  
}

// function to run the whole game
function game(evt) {
 
  //displays the score via a table format
  let displayScore = () => {
    // score.innerHTML = `Player Score: ${playersScore.player} <br>
    // Computer Score: ${playersScore.computer}`;
    playerScoreDisplay.textContent = `${playersScore.player}`;
    computerScoreDisplay.textContent = `${playersScore.computer}`;
    //console.log(playersScore);
    //resultsContainer.appendChild(score);
    scoreHeader.append(playerScoreDisplay);
    scoreHeader.append(computerScoreDisplay);
  }

  //resets the score back to 0
  const resetScore = () => {
    playersScore.player = 0;
    playersScore.computer = 0;
  }

    //call the get player move input function then pass it to a local variable
    const playerMove = evt.target.value;

    //if player input was actually undefined/cancelled/null, exit the game
    // if (!playerMove) {
    //   return;
    // }

    //call the function which decides the computer move
    const computerMove = computerPlay();

    //display roundNum
    displayRound.textContent = `Round: ${roundNum+=1}`;
    resultsContainer.insertBefore(displayRound, matchTableData);
    //call the function which matches up the player move agains the computer move
    playRound(playerMove,computerMove);

    //log the current round, i + 1 because our index starts from 0
    //console.log(`Round ${i + 1}`);

    //log the player move and the computer move
    // displayMove.textContent = `Player move: ${playerMove} Computer move: ${computerMove}`;
    playerMoveDisplay.textContent = `${playerMove}`;
    computerMoveDisplay.textContent = `${computerMove}`;
    moveHeader.appendChild(playerMoveDisplay);
    moveHeader.appendChild(computerMoveDisplay);
    //resultsContainer.appendChild(displayMove);

    //call the function to display the current score in each round
    
    displayScore();      

    const WINNER_SCORE = 5;
    let winner = '';
    if (playersScore.player === WINNER_SCORE) {
      winner = 'You';
    } else if (playersScore.computer === WINNER_SCORE) {
      winner = 'Computer';
    }
    if (winner) {
      roundNum = 0;
      roundOutcome.textContent = `${winner} won!`;
      //resultsContainer.appendChild(roundOutcome);
      resetScore();
      return;
    }
  }

const playerButtons = document.querySelectorAll('.move');
playerButtons.forEach((playerButton) => {
  playerButton.addEventListener('click', game);
});

const resultsContainer = document.querySelector('#results');

const displayRound = document.createElement('p');
//const score = document.createElement('p');
const roundOutcome = document.createElement('p');
const displayMove = document.createElement('p');


const matchTableData = document.querySelector('table');


const scoreHeader = document.querySelector('#score-header');
const playerScoreDisplay = document.createElement('td');
const computerScoreDisplay = document.createElement('td'); 


const moveHeader = document.querySelector('#move-header');
const playerMoveDisplay = document.createElement('td');
const computerMoveDisplay = document.createElement('td');