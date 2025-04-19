

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


function playGame(numberOfRounds) {
    humanScore = 0;
    computerScore = 0;

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

playGame(5)