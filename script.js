//external javascript file for odin-janken

console.log('test');

function computerPlay() {
  let randNum = Math.floor(Math.random() * 100);
  console.log(randNum);

  if (randNum <= 33) {
    return computerSelection = 'rock';
  }
  else if (33 < randNum <= 66) {
    return computerSelection = 'paper';
  }
  else {
    return computerSelection = 'scissors'
  }
}

console.log(computerPlay());

function playJankenRound(playerSelection, computerSelection) {

  if (playerSelection.toUpperCase() == "ROCK"){
    if (computerSelection.toUpperCase() == "ROCK") {
      console.log('you tied with the computer (rock to rock)');
    }
    else if (computerSelection.toUpperCase() == "PAPER") {
      console.log('the computer won (rock to paper)');
    }
    else {
      console.log('you won (rock to scissors)');
    }
  }
  else if (playerSelection.toUpperCase() == "PAPER") {
    if (computerSelection.toUpperCase() == "ROCK") {
      console.log('you won (paper to rock)');
    }
    else if (computerSelection.toUpperCase() == "PAPER") {
      console.log('you tied with the computer (paper to paper)');
    }
    else {
      console.log('you lost (paper to scissors)');
    }
  }
  else if (playerSelection.toUpperCase() == "SCISSORS") {
      if (computerSelection.toUpperCase() == "ROCK") {
        console.log('you lost (scissors to rock)');
      }
      else if (computerSelection.toUpperCase() == "PAPER") {
        console.log('you won (scissors to paper)');
      }
      else {
        console.log('you tied with the computer (scissors to scissors)');
      }
  }
}

playJankenRound('rock', 'rock');
playJankenRound('rock', 'paper');
playJankenRound('rock', 'scissors');

playJankenRound('paper', 'rock');
playJankenRound('paper', 'paper');
playJankenRound('paper', 'scissors');

playJankenRound('scissors', 'rock');
playJankenRound('scissors', 'paper');
playJankenRound('scissors', 'scissors');
