humanScore = 0;
computerScore = 0;

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

// console.log(getComputerChoice());

function getHumanChoice() {
    choice = prompt("Enter your move:");
    return choice.toLowerCase();
}

// console.log(getHumanChoice());

function playRound(humanChoice, computerChoice) {
    if ((humanChoice === "rock" && computerChoice === "scissors") 
        || (humanChoice === "paper" && computerChoice === "rock")
        || (humanChoice === "scissors" && computerChoice === "paper")) {
            humanScore++;
            console.log(`You win! ${humanChoice} beats ${computerChoice}!`);
    } else if ((computerChoice === "rock" && humanChoice === "scissors") 
        || (computerChoice === "paper" && humanChoice === "rock")
        || (computerChoice === "scissors" && humanChoice === "paper")) {
            computerScore++;
            console.log(`You lose! ${computerChoice} beats ${humanChoice}!`);
    } else {
        console.log("It's a draw!")
    }

}

humanChoice = getHumanChoice();
computerChoice = getComputerChoice();
console.log(computerChoice);
console.log(playRound(humanChoice, computerChoice));