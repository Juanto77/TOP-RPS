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
    let selection = prompt('Rock, Paper or Scissors?');
    let finalSelection = selection.toUpperCase();
    console.log(finalSelection);
    return finalSelection;
};


// Computer input: Rock, Paper, Scissors v2

function computerPlay() {
    let array = [ 'Rock', 'Paper', 'Scissors']
    let finalSelection = array[Math.floor(Math.random() * array.length)].toUpperCase();
    return finalSelection
};

let playerSelection = userPlay();
let computerSelection = computerPlay();

//Declare a Winner using the roundWinner, playerSelecton & computerSelection.

function declareWinner() {
    if (roundWinner === 'Player') {
        
    }
}

playRound(playerSelection, computerSelection);
console.log(computerSelection);
alert(`${roundWinner}`);

/* Unused Code

/* Computer input: Rock, Paper, Scissors v1
function computerPlay() {
    let random = ['Rock', 'Paper', 'Scissors'];
    return random[Math.floor(Math.random()* random.length)].toUpperCase();
};
*/
/*
//Computer input v3
function randomComputer() {
    let randomNumber = Math.floor(Math.random() * 3);
    switch (randomNumber) {
        case 0:
            return 'ROCK'
        case 1: 
            return 'PAPER'
        case 2:
            return 'SCISSORS'
     
    }
};
*/