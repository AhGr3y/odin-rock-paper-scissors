function getComputerChoice() {
    const randomNumber = Math.floor(Math.random() * 3);
    if (randomNumber === 1) {
        return "rock";
    } else if (randomNumber === 2) {
        return "paper";
    } else {
        return "scissors";
    }
}

function getHumanChoice() {
    const choice = prompt("Type one of these options: 'rock', 'paper', or 'scissors'.");
    const choiceLowercase = choice.toLowerCase();
    return choiceLowercase;
}