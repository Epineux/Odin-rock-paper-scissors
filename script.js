const availableMoves = ["rock", "paper", "scissors"];
let playerScore = 0;
let computerScore = 0;
function playRound(e) {

    // Function to determine who won considering player and computer choice
    function checkWinner(player, computer) {

        switch(player.toUpperCase()) {

            case 'ROCK':
                switch(computer) {
                    case 'rock':
                        showWinner("draw");
                        break;
                    case 'paper':
                        showWinner("computer");
                        break;
                    default:
                        showWinner("player");
                }
                break;

            case 'PAPER':
                switch(computer) {
                    case 'rock':
                        showWinner("player");
                        break;
                    case 'paper':
                        showWinner("draw");
                        break;
                    default:
                        showWinner("computer");
                }
                break;

            default:
                switch(computer) {
                    case 'rock':
                        showWinner("computer");
                        break;
                    case 'paper':
                        showWinner("player");
                        break;
                    default:
                        showWinner("draw");
                }
        }
    }
    // To show the winner
    function showWinner(winner) {

        switch(winner) {
            
            case("player"):
                document.querySelector(".winner").textContent = "The player won";
                playerScore++;
                showScore();
                break;
            case("computer"):
                document.querySelector(".winner").textContent = "The computer won";
                computerScore++;
                showScore();
                break;
            default:
                document.querySelector(".winner").textContent = "It's a draw";
        }
    }

    // To display the score
    function showScore() {
        document.querySelector('.player').textContent = `Player score : ${playerScore}`;
        document.querySelector('.computer').textContent = `Computer score : ${computerScore}`;
    }

    let playerChoice = e.target.dataset.move;
    console.log(playerChoice);
    // The computer choose rock paper or scissors
    let chooseMove = ()=> availableMoves[Math.floor(Math.random() * availableMoves.length)];
    computerChoice = chooseMove();
    
    console.log(`The player choose ${playerChoice.toUpperCase()}`);
    console.log(`The computer choose ${computerChoice.toUpperCase()}`);
    checkWinner(playerChoice, computerChoice);
    if (playerScore === 5 || computerScore === 5) {
        buttons.forEach(button => button.removeEventListener('click', playRound));
        switch(playerScore) {
            case 5:
                document.querySelector('.score').innerHTML = 'The player has won !';
                break;
            default:
                document.querySelector('.score').innerHTML = 'The computer has won !';
        }
    }
}


    
const buttons = document.querySelectorAll('button');
console.log(buttons);
buttons.forEach(button => button.addEventListener('click', playRound));


