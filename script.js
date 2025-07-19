humanScore = 0;
computerScore = 0;

function getComputerChoice() {
    const min = 1;
    const max = 3;
    const randomChoice = Math.floor(Math.random() * (max - min + 1)) + min;
    if (randomChoice == 1) {
        return "Rock"
    } else if (randomChoice == 2) {
        return "Scissor"
    } else {
        return "Paper"
    }
}

function getHumanChoice() {
    const choice = prompt("Rock, paper, scissors? ");
    if (choice === "Rock") {
        console.log("You choose Rock")
    } else if (choice === "Paper") {
        console.log("You choose Paper")
    } else {
        console.log("You choose Scissors")
    }

    return choice;
}

function playRound(humanChoice, computerChoice) {
    if (humanChoice === "Rock" && computerChoice === "Scissor") {
        console.log("Du hast gewonnen!")
    } else if (humanChoice === "Rock" && computerChoice === "Paper") {
        console.log("Der Computer hat gewonnen")
    } else if (humanChoice === "Rock" && computerChoice === "Rock") {
        console.log("Es ist ein untentschieden!")
    }

        if (humanChoice === "Paper" && computerChoice === "Scissor") {
        console.log("Du hast verloren!")
    } else if (humanChoice === "Paper" && computerChoice === "Paper") {
        console.log("Es ist ein untenschieden")
    } else if (humanChoice === "Paper" && computerChoice === "Rock") {
        console.log("Du hast gewonnen!")
    }

        if (humanChoice === "Scissor" && computerChoice === "Scissor") {
        console.log("Es ist ein untentschieden!")
    } else if (humanChoice === "Scissor" && computerChoice === "Paper") {
        console.log("Du hast gewonnen!")
    } else if (humanChoice === "Scissor" && computerChoice === "Rock") {
        console.log("Du hast verloren!")
    }
}

const humanChoice = getHumanChoice();
const computerChoice = getComputerChoice();

playRound(humanChoice, computerChoice);