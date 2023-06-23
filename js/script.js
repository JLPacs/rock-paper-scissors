let playerScore = 0;
let compScore = 0;

const rockButton = document.querySelector('.rock');
const paperButton = document.querySelector('.paper');
const scissorsButton = document.querySelector('.scissors');
const outcomeDiv = document.querySelector('.outcome');
const playerScoreSpan = document.querySelector('.player-score');
const compScoreSpan = document.querySelector('.comp-score');

const computerPlay = () => {
    const arrOfChoices = ['rock', 'paper', 'scissors'];
    const randomNum = Math.floor(Math.random() * arrOfChoices.length);
    return arrOfChoices[randomNum];
}

const playRound = (playerSelection, computerSelection) => {
    console.log('1 ',playerSelection, '2 ', computerSelection);
    const p = document.createElement('p');
    if (playerSelection === computerSelection) {
        p.innerText = `You tied! you both picked ${playerSelection}`;
    } else if (playerSelection === 'scissors' && computerSelection === 'rock') {
        compScore++;
        p.innerText = 'You lost! ROCK crushes SCISSORS';
    } else if (playerSelection === 'scissors' && computerSelection === 'paper') {
        playerScore++;
        p.innerText = 'You won! SCISSORS cuts PAPER';
    } else if (playerSelection === 'rock' && computerSelection === 'paper') {
        compScore++;
        p.innerText = 'You lost! PAPER covers ROCK';
    } else if (playerSelection === 'rock' && computerSelection === 'scissors') {
        playerScore++;
        p.innerText = 'You won! ROCK crushes SCISSORS';
    } else if (playerSelection === 'paper' && computerSelection === 'scissors') {
        compScore++;
        p.innerText = 'You lost! SCISSORS cuts PAPER'
    } else if (playerSelection === 'paper' && computerSelection === 'rock') {
        playerScore++;
        p.innerText = 'You won! PAPER covers ROCK';
    }
    outcomeDiv.appendChild(p);
}

const checkForWinner = (playerScore, compScore) => {
    const h2 = document.createElement('h2');
    if (playerScore === 5 ) {
        h2.classList.add('player-won')
        h2.innerText = `You WON! player: ${playerScore} vs computer: ${compScore}`;
    } 
    if (compScore === 5) {
        h2.classList.add('computer-won');
        h2.innerText = `computer WON! player: ${playerScore} vs computer: ${compScore}`;   
    }
    outcomeDiv.append(h2);
}

const updateScores = (playerScore, compScore) => {
    playerScoreSpan.innerHTML = `player: ${playerScore}`;
    compScoreSpan.innerHTML = `computer: ${compScore}`;
}

rockButton.addEventListener('click', () => {
    const computerSelection = computerPlay();
    const playerSelection = 'rock';
    playRound(playerSelection, computerSelection);
    updateScores(playerScore, compScore);
    checkForWinner(playerScore, compScore);
});

paperButton.addEventListener('click', () => {
    const computerSelection = computerPlay();
    const playerSelection = 'paper';
    playRound(playerSelection, computerSelection);
    updateScores(playerScore, compScore);
    checkForWinner(playerScore, compScore);

});

scissorsButton.addEventListener('click', () => {
    const computerSelection = computerPlay();
    const playerSelection = 'scissors';
    playRound(playerSelection, computerSelection);
    updateScores(playerScore, compScore);
    checkForWinner(playerScore, compScore);
});

//  const game = () => {
// for(let i = 0; i < 5; i++) {
//    const playerSelection = prompt("Choose: ","Rock, Paper, Scissors?").toLowerCase();
//    const computerSelection = computerPlay();
//    console.log('100', playRound(playerSelection, computerSelection));
// }
//    if (playerScore > compScore) {
//        return 'You BEAT the computer!';
//    } else if (playerScore < compScore) {
//        return 'Computer LOST!';
//    } else {
//        return 'You TIED!';
//    }
// }

// game();