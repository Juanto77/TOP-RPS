// GUI
// const playerSelection = document.querySelector('#weapons');
function userPlay(){
    const weapons = document.querySelectorAll('button');
    weapons.forEach((button) => {
        button.addEventListener('click', () => {
            console.log(button.id)
        })
    });
    }
// const rock = document.querySelector('#rock');
//     rock.addEventListener('click', () => {
//     alert('Rock');
//     playerSelection = 'Rock';
// });

// const paper = document.querySelector('#paper');
//     paper.addEventListener('click', () => {
//     alert('Paper');
//     playerSelecion = 'Paper';
// });

// const scissors = document.querySelector('#scissors');
//     scissors.addEventListener('click', () => {
//     alert('Scissors');
//     playerSelection = 'Scissors';
// });
for (let i = 0; i < 5; i++) {
    const weapons = document.querySelectorAll('button');

    weapons.forEach((button) => {
        button.addEventListener('click', function() {
            const playerSelection = this.textContent;
            
            const computerSelection = computerPlay();

            function computerPlay() {
                let array = ['Rock', 'Paper', 'Scissors']
                let weapon = array[Math.floor(Math.random() * array.length)].toLowerCase();
                let capitalizeWeapon = weapon.charAt(0).toUpperCase() + weapon.slice(1);
                return capitalizeWeapon;
            };

        })
    });
    }

    function game(){
        const paper = document.querySelector('#paper');
        const rock = document.querySelector('#rock');
        const scissors = document.querySelector('#scissors');
        const weapons = ['Rock', 'Paper', 'Scissors'];
        const computerOptions = ['Rock', 'Paper', 'Scissors'];
        
    }