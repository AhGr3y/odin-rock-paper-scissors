let humanScore = 0;
let computerScore = 0;

const humanChoice = getHumanChoice();
const computerChoice = getComputerChoice();

playRound(humanChoice, computerChoice);

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

function playRound(humanChoice, computerChoice) {
    switch (humanChoice) {
        case "rock":
            switch (computerChoice) {
                case "rock":
                    console.log("Draw! Rock ties with Rock.");
                    break;
                case "paper":
                    console.log("You lose! Paper beats Rock.");
                    computerScore++;
                    break;
                case "scissors":
                    console.log("You win! Rock beats Scissors.");
                    humanScore++;
                    break;
            }
            break;
        case "paper":
            switch (computerChoice) {
                case "rock":
                    console.log("You win! Paper beats Rock.");
                    humanScore++;
                    break;
                case "paper":
                    console.log("Draw! Paper ties with Paper.");
                    break;
                case "scissors":
                    console.log("You lose! Scissors beats Paper.");
                    computerScore++;
                    break;
            }
            break;
        case "scissors":
            switch (computerChoice) {
                case "rock":
                    console.log("You lose! Rock beats Scissors.");
                    computerScore++;
                    break;
                case "paper":
                    console.log("You win! Scissors beats Paper.");
                    humanScore++;
                    break;
                case "scissors":
                    console.log("Draw! Scissors ties with Scissors.");
                    break;
            }
            break;
        default:
            console.log("Invalid input!");
    }
}