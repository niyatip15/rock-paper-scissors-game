let playerScore = 0;
let computerScore = 0;

const choices = document.querySelectorAll('.choice');
const message = document.querySelector('#message');
const playerScoreBoard =  document.querySelector('#player-score');
const computerScoreBoard =  document.querySelector('#computer-score');


const getComputerChoice = () => {
    const game_options = ["rock", "paper", "scissors"];
    const randonIndex = Math.floor(Math.random() * 3);
    return game_options[randonIndex];
}

const drawGame = () => {
    message.innerText = 'The game was a draw,Play Again!';
}
const showWinner = (playerWon) => {
    if (playerWon) {
        playerScore++;
        playerScoreBoard.innerText = playerScore;
        message.innerText = 'You won the game.';
    } else {
        computerScore++;
        computerScoreBoard.innerText = computerScore
        message.innerText = 'You lost the game';


    }
}

const playGame = (playerChoice) => {
    const computerChoice = getComputerChoice();
    if (playerChoice === computerChoice) {
        drawGame();
    } else {
        let playerWon = true;
        if (playerChoice === 'rock') {
            playerWon = computerChoice === "paper" ? false : true;
        } else if (playerChoice === 'paper') {
            playerWon = computerChoice === "scissors" ? false : true;
        } else {
            playerWon = computerChoice === "rock" ? false : true;
        }
        showWinner(playerWon);
    }
}

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const playerChoice = choice.getAttribute('id');
        playGame(playerChoice)
    })
})