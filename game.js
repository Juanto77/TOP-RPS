let roundWinner = '';

// Comparison Function
function playRound(playerSelection, computerSelection) {
    if (
        (playerSelection === 'ROCK' && computerSelection === 'ROCK') ||
        (playerSelection === 'SCISSORS' && computerSelection === 'SCISSORS') ||
        (playerSelection === 'PAPER' && computerSelection === 'PAPER')
    ) {
    roundWinner = 'Tie';
    }
    if (
      (playerSelection === 'ROCK' && computerSelection === 'SCISSORS') ||
      (playerSelection === 'SCISSORS' && computerSelection === 'PAPER') ||
      (playerSelection === 'PAPER' && computerSelection === 'ROCK')
    ) {
      roundWinner = 'Player';
    }
   if (
      (playerSelection === 'SCISSORS' && computerSelection === 'ROCK') ||
      (playerSelection === 'PAPER' && computerSelection === 'SCISSORS') ||
      (playerSelection === 'ROCK' && computerSelection === 'PAPER')
    ) {
    roundWinner = 'Computer';
    }
  };

// User Input v1
function userPlay() {
    let array = prompt('Rock, Paper or Scissors?');
    let finalSelection = array.toLowerCase();
    return finalSelection;
};


// Computer input: Rock, Paper, Scissors v2

function computerPlay() {
    let array = [ 'Rock', 'Paper', 'Scissors']
    let finalSelection = array[Math.floor(Math.random() * array.length)].toLowerCase();
    return finalSelection
};

let playerSelection = userPlay();
let computerSelection = computerPlay();

//Declare a Winner using the roundWinner, playerSelecton & computerSelection.

function declareWinner() {
    if (roundWinner === 'Tie') {
        alert('It\'s a Tie!');
    }
    else if (roundWinner === 'Player') {
        alert('You won!' + ` ${playerSelection} beats ${computerSelection}`)
    }
    else if (roundWinner === 'Computer') {
        alert('You lost' + `${computerSelection} beats ${playerSelection}`)
    }
}

playRound(playerSelection, computerSelection);
console.log('User: ' + playerSelection);
console.log('Computer: ' + computerSelection);
declareWinner();




