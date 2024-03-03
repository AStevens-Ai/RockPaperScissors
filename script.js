//Declare Variables for users choice and computers choice and wins for both respectively//
let pW = 0;
let cW = 0;
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
function playGame() {
  while (pW < 3 && cW < 3) {
    let playerChoice = String(prompt('Rock, Paper, Or Scissors?', ''));
    let computerChoice = getComputerChoice();
    let player = playerChoice.toUpperCase();
    let computer = computerChoice.toUpperCase();
    if (player == 'ROCK' && computer == 'PAPER') {
      alert('You lost! Paper Beats Rock!');
      cW++;
    } else if (player == 'ROCK' && computer == 'SCISSORS') {
      alert('You Won! Rock Beats Scissors!');
      pW++;
    } else if (player == 'PAPER' && computer == 'ROCK') {
      alert('You Won! Paper Beats rock!');
      pW++;
    } else if (player == 'PAPER' && computer == 'SCISSORS') {
      alert('You lost! Scissors beats paper!');
      cW++;
    } else if (player == 'SCISSORS' && computer == 'ROCK') {
      alert('You lost! Rock beats scissors!');
      cW++;
    } else if (player == 'SCISSORS' && computer == 'PAPER') {
      alert('You Won! scissors beats paper!');
      pW++;
    } else {
      alert(`Its a tie! You both chose ${computerChoice}! `);
    }
  }
}

playGame();

console.log('Final Scores:');
console.log('Player:', pW);
console.log('Computer:', cW);
alert('Thanks for playing! Reload the page to play again!');
