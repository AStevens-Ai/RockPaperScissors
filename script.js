//Declare Variables for users choice and computers choice and wins for both respectively//
let pW = document.querySelector('.playerWins');
let cW = document.querySelector('.computerWins')
function roundWin(winner) {
  switch(winner){
    case 'player':
       pW.textContent = parseInt(pW.textContent) + 1;
       if (pW.textContent >= 3 || cW.textContent >= 3) {
       alert('Game Over! You won! Thanks for playing! Reload the page to play again!');
        pW.textContent = 0;
        cW.textContent = 0; 
        
      }
       break;
    case 'computer':
      cW.textContent = parseInt(cW.textContent) + 1;
      if (pW.textContent >= 3 || cW.textContent >= 3) {
        alert('Game Over! You lost! Thanks for playing! Reload the page to play again!');
        pW.textContent = 0;
        cW.textContent = 0;
      }
      break;
  }
}
//create a function named getComputerChoice for computer to rng between rock , paper and scissors//
function getComputerChoice() {
  let computerNumber = Math.floor(Math.random() * 3 + 1);
  if (computerNumber === 1) {
    return 'Rock';
  } else if (computerNumber === 2) {
    return 'Paper';
  } else {
    return 'Scissors';
  }
}
//create a function to take both computer and users choice via string, and log back a string saying who won with the name of eachothers choice. (make it not case sensistive)//
function playGame(playerChoice) {

    let computerChoice = getComputerChoice();
    let player = playerChoice.toUpperCase();
    let computer = computerChoice.toUpperCase();
    if (player == 'ROCK' && computer == 'PAPER') {
      alert('You lost! Paper Beats Rock!');
      roundWin('computer')
    } else if (player == 'ROCK' && computer == 'SCISSORS') {
      alert('You Won! Rock Beats Scissors!');
      roundWin('player')
    } else if (player == 'PAPER' && computer == 'ROCK') {
      alert('You Won! Paper Beats rock!');
      roundWin('player')
    } else if (player == 'PAPER' && computer == 'SCISSORS') {
      alert('You lost! Scissors beats paper!');
      roundWin('computer')
    } else if (player == 'SCISSORS' && computer == 'ROCK') {
      alert('You lost! Rock beats scissors!');
      roundWin('computer')
    } else if (player == 'SCISSORS' && computer == 'PAPER') {
      alert('You Won! scissors beats paper!');
      roundWin('player')
    } else {
      alert(`Its a tie! You both chose ${computerChoice}! `);
    }
  }

if (pW >= 3 || cW >= 3) {
  alert('Game Over! Thanks for playing! Reload the page to play again!');
  pW = 0;
  cW = 0;
}
let rockButton = document.querySelector('#rock');
let paperButton = document.querySelector('#paper');
let scissorsButton = document.querySelector('#scissors');

rockButton.addEventListener('click', function() {
    playGame('rock');
});

paperButton.addEventListener('click', function() {
    playGame('paper');
});

scissorsButton.addEventListener('click', function() {
    playGame('scissors');
});


