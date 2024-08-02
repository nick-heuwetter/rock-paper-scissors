const rockBtn = document.querySelector('#rock');
const paperBtn = document.querySelector('#paper');
const scissorsBtn = document.querySelector('#scissors');
const humanScoreDisplay = document.querySelector('#h-score');
const computerScoreDisplay = document.querySelector('#c-score');
const mainDisplay = document.querySelector('#main-display');
const buttonDiv = document.querySelector('#buttonDiv')
const restartBtn = document.createElement('button');

restartBtn.textContent = 'Restart';

let choice = ['ROCK', 'PAPER', 'SCISSORS']; 

function getComputerChoice(){                 
    let randomIndex = Math.floor(Math.random()*3); 
    return choice[randomIndex];
}

let humanScore = 0;

let computerScore = 0; 
    
function playRound(humanChoice){
    const computerChoice = getComputerChoice();
    if(humanChoice === computerChoice){
        mainDisplay.textContent = `It\'s a tie! You chose ${humanChoice}! The computer chose ${computerChoice}!`;
    } else if (humanChoice === 'ROCK' && computerChoice === 'SCISSORS'){
        mainDisplay.textContent = `You won! You chose ROCK! The computer chose SCISSORS!`;
        humanScore++;
        humanScoreDisplay.textContent = humanScore;
    } else if (humanChoice === 'ROCK' && computerChoice === 'PAPER'){
        mainDisplay.textContent = `You lose! You chose ROCK! The computer chose PAPER!`;
        computerScore++;
        computerScoreDisplay.textContent = computerScore;
    } else if (humanChoice === 'PAPER' && computerChoice === 'ROCK'){
        mainDisplay.textContent = 'You won! You chose PAPER! The computer chose ROCK!';
        humanScore++;
        humanScoreDisplay.textContent = humanScore;
    } else if (humanChoice === 'PAPER' && computerChoice === 'SCISSORS'){
        mainDisplay.textContent = 'You lost! You chose PAPER! The computer chose SCISSORS!';
        computerScore++;
        computerScoreDisplay.textContent = computerScore;
    } else if (humanChoice === 'SCISSORS' && computerChoice === 'PAPER'){
        mainDisplay.textContent = 'You won! You chose SCISSORS! The computer chose PAPER!';
        humanScore++;
        humanScoreDisplay.textContent = humanScore;
    } else {
        mainDisplay.textContent = 'You lost! You chose SCISSORS! The computer chose ROCK!';
        computerScore++;
        computerScoreDisplay.textContent = computerScore;
    }

    if(humanScore >= 5){
        mainDisplay.textContent = 'You reached 5 points! You won the game!';
        rockBtn.remove();
        paperBtn.remove();
        scissorsBtn.remove();
        buttonDiv.appendChild(restartBtn);
    } else if (computerScore >= 5){
        mainDisplay.textContent = 'You lost the game! The computer reached 5 points!';
        rockBtn.remove();
        paperBtn.remove();
        scissorsBtn.remove();
        buttonDiv.appendChild(restartBtn);
    }
};

function restart(){
    humanScore = 0;
    computerScore = 0;
    humanScoreDisplay.textContent = 0;
    computerScoreDisplay.textContent = 0;
    mainDisplay.textContent = 'ROCK, PAPER, SCISSORS!';
    restartBtn.remove();
    buttonDiv.appendChild(rockBtn);
    buttonDiv.appendChild(paperBtn);
    buttonDiv.appendChild(scissorsBtn);
}

rockBtn.addEventListener('click', () => playRound('ROCK'));
paperBtn.addEventListener('click', () => playRound('PAPER'));
scissorsBtn.addEventListener('click', () => playRound('SCISSORS'));
restartBtn.addEventListener('click', restart);