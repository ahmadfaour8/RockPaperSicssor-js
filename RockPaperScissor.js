let score = 0

function getComputerChoice() {
    let Choices = ["rock", "paper", "scissor"]
    return Choices[parseInt(Math.random() * 3)]
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection.toLowerCase() === computerSelection) {
        return `It's a Tie!`
    } else if (
        playerSelection.toLowerCase() === "rock" &&
        computerSelection === "paper"
    ) {
        score -= 1
        return `You LOST! ${computerSelection} beats ${playerSelection}`
    } else if (
        playerSelection.toLowerCase() === "paper" &&
        computerSelection === "scissor"
    ) {
        score -= 1
        return `You LOST! ${computerSelection} beats ${playerSelection}`
    } else if (
        playerSelection.toLowerCase() === "scissor" &&
        computerSelection === "rock"
    ) {
        score -= 1
        return `You LOST! ${computerSelection} beats ${playerSelection}`
    } else {
        score += 1
        return `You WON! ${playerSelection} beats ${computerSelection}`
    }
}

function game() {
    for (let i = 1; i <= 5; i++) {
        let playerSelection = prompt("Enter your choice (rock, paper, scisser)")
        alert(playRound(playerSelection, getComputerChoice()))
    }
    alert(score >= 3 ? "Congrats You WON!" : "You SUCK at this GAME")
}

console.log(game())

