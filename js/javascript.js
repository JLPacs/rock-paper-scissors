const options = ["rock", "paper", "scissors"];

function getComputerChoice() {
    const choice = options[Math.floor(Math.random() * options.length)];
    return choice;
}

function checkWinner(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return "Tie";
    } else if (
        (playerSelection === "rock" && computerSelection === "scissors") ||
        (playerSelection === "scissors" && computerSelection === "paper") ||
        (playerSelection === "paper" && computerSelection === "rock")
    ){
        return "Player";
    } else {
        return "Computer";
    }
}

function playRound(playerSelection, computerSelection) {
    const result = checkWinner(playerSelection, computerSelection); {
        if (result == "Tie") {
            return "It's a tie!";
        } else if (result === "Player") {
            return `You win! ${playerSelection} beats ${computerSelection}`;
        } else {
            return `You Lose! ${computerSelection} beats ${playerSelection}`;
        }
    }
}

/* const playerSelection = prompt("rock,paper or scissors?");
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection,computerSelection));
*/

function getPlayerChoice() {
    let validatedInput = false;
    while(validatedInput === false) {
        const choice = prompt("Rock Paper Scissors");
        if(choice === null) {
            continue;
        }
        const choiceInLower = choice.toLowerCase();
        if (options.includes(choiceInLower)) {
            validatedInput = true;
            return choiceInLower;
        }
    }
}

function game() {
    let scorePlayer = 0;
    let scoreComputer = 0;
    console.log("Welcome");
    for (let i = 0; i < 5; i++) {
        //const playerSelection = prompt("Rock, Paper or Scissors?");
        const playerSelection = getPlayerChoice();
        const computerSelection = getComputerChoice();
        console.log(playRound(playerSelection,computerSelection));
        console.log("-----------------");
        if(checkWinner(playerSelection, computerSelection) === "Player"){
            scorePlayer++;
        } else if (checkWinner(playRound,computerSelection) === "Computer"){
            scoreComputer++;
        }
    }
    console.log("Game Over!");
    if(scorePlayer > scoreComputer) {
        console.log(`You beat the computer! ${scorePlayer} over ${scoreComputer}`);
    } else if (scorePlayer < scoreComputer) {
        console.log(`You lose! ${scoreComputer} over ${scorePlayer}`);
    } else {
        console.log(`It's a TIE! computer: ${scoreComputer} player: ${scorePlayer}`);
    }
}

game();