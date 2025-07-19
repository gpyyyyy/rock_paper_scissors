let humanScore = 0;
let computerScore = 0;
const allRounds = 5;

function getComputerChoice() {
    const min = 1;
    const max = 3;
    const randomChoice = Math.floor(Math.random() * (max - min + 1)) + min;
    if (randomChoice === 1) {
        return "Rock";
    } else if (randomChoice === 2) {
        return "Scissor";
    } else {
        return "Paper";
    }
}

function getHumanChoice() {
    const choice = prompt("Gib deine Wahl ein: Rock, Paper oder Scissor?");
    return choice;
}

function playRound(humanChoice, computerChoice) {
    console.log("Du hast gewählt: " + humanChoice);
    console.log("Der Computer hat gewählt: " + computerChoice);

    // Unentschieden-Fälle
    if (humanChoice === computerChoice) {
        console.log("Es ist ein Unentschieden!");
        return "Unentschieden";
    }

    
    if ((humanChoice === "Rock" && computerChoice === "Scissor") ||
        (humanChoice === "Paper" && computerChoice === "Rock") ||
        (humanChoice === "Scissor" && computerChoice === "Paper")) {
        console.log("Du hast diese Runde gewonnen!");
        return "Mensch gewinnt";
    }

    
    else {
        console.log("Der Computer hat diese Runde gewonnen!");
        return "Computer gewinnt";
    }
}


function playGame() {
    const rounds = 0;
    const allRounds = 5;

    humanScore = 0;
    computerScore = 0;

    for (let i = 0; i < allRounds; i++) {
        console.log("--- Runde " + (i + 1) + " ---");

        const humanChoice = getHumanChoice();
        const computerChoice = getComputerChoice();

        const roundResult = playRound(humanChoice, computerChoice);

        if (roundResult === "Mensch gewinnt") {
            humanScore++; 
            console.log("Punkt für dich!");
        } else if (roundResult === "Computer gewinnt") {
            computerScore++;
            console.log("Punkt für den Computer!");
        } else {
            
            console.log("Keine Punkte in dieser Runde.");
        }

        console.log("Aktueller Spielstand - Du: " + humanScore + ", Computer: " + computerScore);

        console.log("--- Spielende ---");
        if (humanScore > computerScore) {
            console.log("Herzlichen Glückwunsch, du hast das Spiel gewonnen!");
        } else if (computerScore > humanScore) {
            console.log("Schade, der Computer hat das Spiel gewonnen!");
        } else {
            console.log("Das Spiel endet unentschieden!");
        }
    }
}

playGame();