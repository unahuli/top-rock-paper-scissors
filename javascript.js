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

console.log(getComputerChoice());

function getHumanChoice() {
    choice = prompt("Enter your move:");
    return choice.toLowerCase();
}

console.log(getHumanChoice());