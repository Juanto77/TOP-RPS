
const weapons = document.querySelectorAll('button');
let playerScore = 0;
let computerScore = 0;

//Score Keeper
weapons.forEach((button) => {
    button.addEventListener('click', function() {
        const playerSelection = this.textContent;
        const array = ['Rock', 'Paper', 'Scissors']
        const weapon = array[Math.floor(Math.random() * array.length)].toLowerCase();
        const computerSelection = weapon.charAt(0).toUpperCase() + weapon.slice(1);
        playRound(playerSelection, computerSelection);
        checkWinner();
    })
});

//Compare Round
function playRound(playerSelection, computerSelection) {
    if (
        (playerSelection === 'Rock' && computerSelection === 'Rock') ||
        (playerSelection === 'Scissors' && computerSelection === 'Scissors') ||
        (playerSelection === 'Paper' && computerSelection === 'Paper')
    ) {
        roundWinner = 'Tie';
        console.log('It\s a tie');
    }
    if (
      (playerSelection === 'Rock' && computerSelection === 'Scissors') ||
      (playerSelection === 'Scissors' && computerSelection === 'Paper') ||
      (playerSelection === 'Paper' && computerSelection === 'Rock')
    ) {
        ++playerScore;
        roundWinner = 'Player';
        console.log(`You won! ${playerSelection} beats ${computerSelection}`)
    }
   if (
      (playerSelection == 'Scissors' && computerSelection == 'Rock') ||
      (playerSelection == 'Paper' && computerSelection == 'Scissors') ||
      (playerSelection == 'Rock' && computerSelection == 'Paper')
    ) {
        ++computerScore;
        roundWinner = 'Computer';
        console.log(`Sorry, you lost. ${computerSelection} beats ${playerSelection}`)
    }
    updateScore(roundWinner, playerSelection, computerSelection);
  };

  function updateScore(roundWinner, playerSelection, computerSelection){
    document.getElementById('computer-score').textContent = computerScore;
    document.getElementById('computer-choice').textContent = computerSelection;
    document.getElementById('player-score').textContent = playerScore;
    document.getElementById('player-choice').textContent = playerSelection;
    document.getElementById('round-winner').textContent = roundWinner;
}

  function checkWinner(){
      if (playerScore === 5) {
          alert('player wins')
      } if (computerScore === 5) {
          alert('computer wins!')
      }
  }

  const restart = document.getElementById('reset');
  restart.addEventListener('click', reset);

  function reset(){
    computerScore = 0
    playerScore = 0
    let playerSelection = ''
    computerSelection = ''
  }