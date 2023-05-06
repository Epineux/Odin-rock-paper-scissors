const availableMoves = ["rock", "paper", "scissors"];
let playerScore = 0;
let computerScore = 0;
function playRound() {

    let playerChoice = prompt("What do you play ? (rock | paper | scissors)");

    // Is the user input valid ? (case insensitive)
    if (playerChoice.localeCompare(availableMoves[0], undefined, { sensitivity: 'accent' }) !== 0 &&
    playerChoice.localeCompare(availableMoves[1], undefined, { sensitivity: 'accent' }) !== 0 &&
    playerChoice.localeCompare(availableMoves[2], undefined, { sensitivity: 'accent' }) !== 0) {
        alert("This is not a valid choice !");
    } else {
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
                    console.log("The player won");
                    playerScore++;
                    break;
                case("computer"):
                    console.log("The computer won");
                    computerScore++;
                    break;
                default:
                    console.log("It's a draw");
            }
        }
        // The computer choose rock paper or scissors
        let chooseMove = ()=> availableMoves[Math.floor(Math.random() * availableMoves.length)];
        computerChoice = chooseMove();
        
        console.log(`The player choose ${playerChoice.toUpperCase()}`);
        console.log(`The computer choose ${computerChoice.toUpperCase()}`);
        checkWinner(playerChoice, computerChoice);
    }
}

// A game is 5 round
function playGame() {
    for(let i = 0; i < 5; i++) {
        console.log(`The score is ${playerScore} for the player and ${computerScore} for the computer.`)
        playRound();
    }
}

playGame();