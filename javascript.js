let humanScore = 0;
let computerScore = 0;
const rockBtn = document.querySelector("#rock");
const paperBtn = document.querySelector("#paper");
const scissorsBtn = document.querySelector("#scissors");

rockBtn.addEventListener("click", () => {
    const computerChoice = getComputerChoice();
    playRound("rock", computerChoice);
});

paperBtn.addEventListener("click", () => {
    const computerChoice = getComputerChoice();
    playRound("paper", computerChoice);
});

scissorsBtn.addEventListener("click", () => {
    const computerChoice = getComputerChoice();
    playRound("scissors", computerChoice);
});

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

function playRound(humanChoice, computerChoice) {
    const winningScore = 5;
    const results = document.querySelector("#results");

    switch (humanChoice) {
        case "rock":
            switch (computerChoice) {
                case "rock":
                    results.textContent = "Draw! Rock ties with Rock."
                    break;
                case "paper":
                    computerScore++;
                    results.textContent = "You lose! Paper beats Rock.";
                    break;
                case "scissors":
                    humanScore++;
                    results.textContent = "You win! Rock beats Scissors.";
                    break;
            }
            break;
        case "paper":
            switch (computerChoice) {
                case "rock":
                    humanScore++;
                    results.textContent = "You win! Paper beats Rock.";
                    break;
                case "paper":
                    results.textContent = "Draw! Paper ties with Paper.";
                    break;
                case "scissors":
                    computerScore++;
                    results.textContent = "You lose! Scissors beats Paper.";
                    break;
            }
            break;
        case "scissors":
            switch (computerChoice) {
                case "rock":
                    results.textContent = "You lose! Rock beats Scissors.";
                    break;
                case "paper":
                    humanScore++;
                    results.textContent = "You win! Scissors beats Paper.";
                    break;
                case "scissors":
                    computerScore++;
                    results.textContent = "Draw! Scissors ties with Scissors.";
                    break;
            }
            break;
        default:
            results.textContent = "Invalid input! Try again.";
    }

    if (humanScore === winningScore) {
        results.textContent = "You are the winner!";
        disableButtons();
    } else if (computerScore === winningScore) {
        results.textContent = "You lost to the computer!";
        disableButtons();
    }

    const scores = document.querySelector("#scores");
    scores.textContent = `Your score: ${humanScore} || Computer score: ${computerScore}`;
}

function disableButtons() {
    rockBtn.disabled = true;
    paperBtn.disabled = true;
    scissorsBtn.disabled = true;
}

function playGame() {
    let gameRounds = 1;
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

