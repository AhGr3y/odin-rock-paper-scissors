playGame();

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
                    return 2;
                case "paper":
                    console.log("You lose! Paper beats Rock.");
                    return 0;
                case "scissors":
                    console.log("You win! Rock beats Scissors.");
                    return 1;
            }
            break;
        case "paper":
            switch (computerChoice) {
                case "rock":
                    console.log("You win! Paper beats Rock.");
                    return 1;
                case "paper":
                    console.log("Draw! Paper ties with Paper.");
                    return 2;
                case "scissors":
                    console.log("You lose! Scissors beats Paper.");
                    return 0;
            }
            break;
        case "scissors":
            switch (computerChoice) {
                case "rock":
                    console.log("You lose! Rock beats Scissors.");
                    return 0;
                case "paper":
                    console.log("You win! Scissors beats Paper.");
                    return 1;
                case "scissors":
                    console.log("Draw! Scissors ties with Scissors.");
                    return 2;
            }
            break;
        default:
            console.log("Invalid input! Try again.");
            return -1;
    }
}

function playGame() {
    let gameRounds = 5;
    let humanScore = 0;
    let computerScore = 0;

    while (gameRounds > 0) {
        const humanChoice = getHumanChoice();
        const computerChoice = getComputerChoice();
        const result = playRound(humanChoice, computerChoice);
        if (result === 1) {
            humanScore++;
        } else if (result === 0) {
            computerScore++;
        } else {
            gameRounds++;
        }
        gameRounds--;
        console.log(`Rounds left: ${gameRounds}. Your score: ${humanScore}. Computer score: ${computerScore}.`);
    }
    
    if (humanScore > computerScore) {
        console.log(`You won! Your score: ${humanScore}. Computer score: ${computerScore}.`);
    } else if (humanScore < computerScore) {
        console.log(`You lost! Your score: ${humanScore}. Computer score: ${computerScore}.`);
    } else {
        console.log("It's a tie! Your score: ${");
    }

}
