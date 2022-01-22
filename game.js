let playerScore = 0;
let computerScore = 0;
let roundWinner = '';


// The Game 
function playRound(playerSelection, computerSelection) {
    if (
        (playerSelection === 'Rock' && computerSelection === 'Rock') ||
        (playerSelection === 'Scissors' && computerSelection === 'Scissors') ||
        (playerSelection === 'Paper' && computerSelection === 'Paper')
    ) {
        roundWinner = 'Tie';
    }
    if (
      (playerSelection === 'Rock' && computerSelection === 'Scissors') ||
      (playerSelection === 'Scissors' && computerSelection === 'Paper') ||
      (playerSelection === 'Paper' && computerSelection === 'Rock')
    ) {
        playerScore++
        roundWinner = 'Player';
    }
   if (
      (playerSelection == 'Scissors' && computerSelection == 'Rock') ||
      (playerSelection == 'Paper' && computerSelection == 'Scissors') ||
      (playerSelection == 'Rock' && computerSelection == 'Paper')
    ) {
        computerScore++
        roundWinner = 'Computer';
    }
  };

//Declare the winner with their weapon of choice.
function declareWinner() {
    if (roundWinner === 'Tie') {
        alert('It\'s a Tie!');
    }
    else if (roundWinner === 'Player') {
        alert(`You won! ${playerSelection} beats ${computerSelection}`)
    }
    else if (roundWinner === 'Computer') {
        alert(`Sorry, you lost. ${computerSelection} beats ${playerSelection}`)
    }
};

// User Input v1
function userPlay() {
    let input = prompt('Rock, Paper or Scissors?');
    let weapon = input.charAt(0).toUpperCase() + input.slice(1);
    return weapon;
};


// Computer picks from array. Outputs string of capital weapon.
function computerPlay() {
    let array = ['Rock', 'Paper', 'Scissors']
    let weapon = array[Math.floor(Math.random() * array.length)].toLowerCase();
    let capitalizeWeapon = weapon.charAt(0).toUpperCase() + weapon.slice(1);
    return capitalizeWeapon;
};

let playerSelection = userPlay();
let computerSelection = computerPlay();

//Am I doing this right?
playRound(playerSelection, computerSelection);
console.log('User: ' + playerSelection);
console.log('Computer: ' + computerSelection);
declareWinner();
console.log(playerScore); console.log(computerScore);