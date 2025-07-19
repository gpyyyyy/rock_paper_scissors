

function getComputerChoice () {
    const min = 1;
    const max = 3;
    const randomChoice = Math.floor(Math.random() * (max - min + 1)) + min;
        if (randomChoice == 1) {
            return "rock"
        } else if (randomChoice == 2) {
            return "scissor"
        } else {
            return "paper"
        }   
}

function getHumanChoice () {
    const choice = prompt("Rock, paper, scissors? ");
        if (choice === "Rock") {
            return "You choose Rock"
        } else if (choice === "Paper") {
            return "You choose Paper"
        } else {
            return "You choose Scissors"
        }

    console.log(getHumanChoice(choice));
}