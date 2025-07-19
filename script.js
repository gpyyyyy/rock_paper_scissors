function getComputerChoice () {
    const min = 1;
    const max = 3;
    const randomChoice = Math.floor(Math.random() * (max - min + 1)) + min;
    return randomChoice;
}

console.log(getComputerChoice()); 