//external javascript file for odin-janken

//UI
const body = document.querySelector('body');

const container = document.createElement('div');
const btnRock = document.createElement('button');
const btnPaper = document.createElement('button');
const btnScissors = document.createElement('button');
const resultsDiv = document.createElement('div');

body.appendChild(container);
container.appendChild(btnRock);
container.appendChild(btnPaper);
container.appendChild(btnScissors);
container.appendChild(resultsDiv);

btnRock.textContent = "Rock";
btnPaper.textContent = "Paper";
btnScissors.textContent = "Scissors";

resultsDiv.textContent = 'test';

let result = null;

btnRock.addEventListener('click',
  () => {
    addResult('testRock');
    console.log(playJankenRound('rock', computerPlay()));
  });
btnPaper.addEventListener('click',
  () => {
    addResult('testPaper');
    console.log(playJankenRound('paper', computerPlay()))
  });
btnScissors.addEventListener('click',
  () => {
    addResult('testScissors');
    console.log(playJankenRound('scissors', computerPlay()))
  });


function addResult(resultString) {
    result = document.createElement('p');
    resultsDiv.appendChild(result);
    result.textContent = resultString;
    result = null;
}

//GAME LOGIC

function computerPlay() {
  let randNum = Math.floor(Math.random() * 100);

  if (randNum <= 33) {
    return computerSelection = 'rock';
  }
  else if (33 < randNum && randNum <= 66) {
    return computerSelection = 'paper';
  }
  else if (randNum > 66){
    return computerSelection = 'scissors'
  }
}

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
    //console.log(playJankenRound(window.prompt('rock, paper, or scissors?'), computerPlay()))
}

game();
