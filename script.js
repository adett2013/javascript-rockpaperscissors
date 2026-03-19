const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissors = document.getElementById("scissors");
const result = document.getElementById("result");
const userScoreEl = document.getElementById("user-score");
const computerScoreEl = document.getElementById("computer-score");
const scoreboard = document.getElementById("scoreboard");

let userScore = 0;
let computerScore = 0;

rock.addEventListener("click", () => play("rock"));
paper.addEventListener("click", () => play("paper"));
scissors.addEventListener("click", () => play("scissors"));

function play(userChoice) {
    if (userScore >= 3 || computerScore >= 3) {
        return;
    }

    const choices = ["rock", "paper", "scissors"];
    const computerChoice = choices[Math.floor(Math.random() * choices.length)];

    if (userChoice === computerChoice) {
        result.textContent = `Draw! You: ${userChoice}, Computer: ${computerChoice}`;
    } else if (
        (userChoice === "rock" && computerChoice === "scissors") ||
        (userChoice === "paper" && computerChoice === "rock") ||
        (userChoice === "scissors" && computerChoice === "paper")
    ) {
        userScore += 1;
        result.textContent = `You win this round! You: ${userChoice}, Computer: ${computerChoice}`;
    } else {
        computerScore += 1;
        result.textContent = `Computer wins this round! You: ${userChoice}, Computer: ${computerChoice}`;
    }
    if (userScore > 0 || computerScore > 0) {
    scoreboard.style.display = "block";
    userScoreEl.textContent = userScore;
    computerScoreEl.textContent = computerScore;
    }

    if (userScore === 3) {
        result.textContent = "You win the game!";
        disableButtons();
    } else if (computerScore === 3) {
        result.textContent = "Computer wins the game!";
        disableButtons();
    }
}

function disableButtons() {
    rock.disabled = true;
    paper.disabled = true;
    scissors.disabled = true;
}