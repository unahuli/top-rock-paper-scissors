let humanScore = 0;
let computerScore = 0;
let round = 1;
//Query Selectors
buttons = document.querySelectorAll(".btn-container button");
buttons.forEach((button => {
    button.addEventListener("click", (e) => {
        console.log(e.target.textContent);
        let playerChoice = e.target.textContent.toLowerCase();
        playRound(playerChoice,getComputerChoice());
    });
    })
);


function getComputerChoice() {
    randNumber = Math.floor(Math.random() * 3);
    if (randNumber === 0) {
        return "rock";
    } else if (randNumber === 1) {
        return "paper"
    } else {
        return "scissors"
    }
}

function getHumanChoice() {
    choice = prompt("Enter your move:");
    return choice.toLowerCase();
}

function playRound(humanChoice, computerChoice) {
    roundDisplay = document.querySelector("#round-display");
    scoreDisplay = document.querySelector("#score-display");
    roundOutcome = document.querySelector("#round-outcome");
    roundDisplay.textContent = `Round: ${round}`;
    scoreDisplay.textContent = `Player score: ${humanScore}
                                Computer score: ${computerScore}`
    if ((humanChoice === "rock" && computerChoice === "scissors") 
        || (humanChoice === "paper" && computerChoice === "rock")
        || (humanChoice === "scissors" && computerChoice === "paper")) {
            humanScore++;
            roundOutcome.textContent = `You win! ${humanChoice} beats ${computerChoice}!`;
    } else if ((computerChoice === "rock" && humanChoice === "scissors") 
        || (computerChoice === "paper" && humanChoice === "rock")
        || (computerChoice === "scissors" && humanChoice === "paper")) {
            computerScore++;
            roundOutcome.textContent = `You lose! ${computerChoice} beats ${humanChoice}!`;
    } else {
        roundOutcome.textContent = "It's a draw!";
    }
    scoreDisplay.textContent = `Player score: ${humanScore}
                                Computer score: ${computerScore}`;
    nextRound();
    if (humanScore === 5 || computerScore === 5) {
        roundOutcome.textContent = declareWinner();
        disableButtons();
    }
}

function nextRound() {
    round++;
}

function declareWinner() {
    if (humanScore === 5 && (computerScore < humanScore)) {
        return "You win!";
    } else  if (computerScore === 5 && (humanScore < computerScore)) {
        return "You lose!";
    }
}

function disableButtons() {
    buttons.forEach(button => {
        button.disabled = true;
    });
}

function playGame(numberOfRounds) {

    for(i=1;i<=numberOfRounds;i++) {
        playRound(getHumanChoice(),getComputerChoice())
    }

    if (humanScore > computerScore) {
        console.log(`You win! The score is: ${humanScore}:${computerScore}`);
    } else if (computerScore > humanScore) {
        console.log(`You lose! The score is: ${humanScore}:${computerScore}`);
    } else {
        console.log(`It's a draw! The score is: ${humanScore}:${computerScore}`)
    }
}

//playGame(5)