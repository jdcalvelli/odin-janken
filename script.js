//external javascript file for odin-janken

console.log('test');

function computerPlay() {
  let randNum = Math.floor(Math.random() * 100);
  //console.log(randNum);

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

//console.log(computerPlay());

function playJankenRound(playerSelection, computerSelection) {

  if (playerSelection.toUpperCase() == "ROCK"){
    if (computerSelection.toUpperCase() == "ROCK") {
      return 'you tied with the computer (rock to rock)';
    }
    else if (computerSelection.toUpperCase() == "PAPER") {
      return 'the computer won (rock to paper)';
    }
    else {
      return 'you won (rock to scissors)';
    }
  }
  else if (playerSelection.toUpperCase() == "PAPER") {
    if (computerSelection.toUpperCase() == "ROCK") {
      return 'you won (paper to rock)';
    }
    else if (computerSelection.toUpperCase() == "PAPER") {
      return 'you tied with the computer (paper to paper)';
    }
    else {
      return 'you lost (paper to scissors)';
    }
  }
  else if (playerSelection.toUpperCase() == "SCISSORS") {
      if (computerSelection.toUpperCase() == "ROCK") {
        return 'you lost (scissors to rock)';
      }
      else if (computerSelection.toUpperCase() == "PAPER") {
        return 'you won (scissors to paper)';
      }
      else {
        return 'you tied with the computer (scissors to scissors)';
      }
  }
}

//console.log(playJankenRound('rock', 'rock'))

function game() {
  for (var i = 0; i < 5; i++) {
    console.log(playJankenRound(window.prompt('rock, paper, or scissors?'), computerPlay()))
  }
}

game();
