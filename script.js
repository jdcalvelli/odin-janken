//external javascript file for odin-janken

//VARS
let playerObj = {
  score: 0,
  display: document.createElement('p')
}
let computerObj = {
  score: 0,
  display: document.createElement('p')
}

const body = document.querySelector('body');

const container = document.createElement('div');

const btnRock = document.createElement('button');
const btnPaper = document.createElement('button');
const btnScissors = document.createElement('button');

const resultsDiv = document.createElement('div');

let result = null;

//UI

body.appendChild(container);

container.appendChild(playerObj.display);
playerObj.display.textContent = "player score" + " " + playerObj.score;

container.appendChild(computerObj.display);
computerObj.display.textContent = "computer score" + " " + computerObj.score;

container.appendChild(btnRock);
btnRock.textContent = "Rock";

container.appendChild(btnPaper);
btnPaper.textContent = "Paper";

container.appendChild(btnScissors);
btnScissors.textContent = "Scissors";

container.appendChild(resultsDiv);


//GAME LOGIC

btnRock.addEventListener('click',
  () => {
    addResult(playJankenRound('rock', computerPlay()));
  });
btnPaper.addEventListener('click',
  () => {
    addResult(playJankenRound('paper', computerPlay()));
  });
btnScissors.addEventListener('click',
  () => {
    addResult(playJankenRound('scissors', computerPlay()));
  });

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
      updateScore(computerObj);
      return 'the computer won (rock to paper)';
    }
    else {
      updateScore(playerObj);
      return 'you won (rock to scissors)';
    }
  }
  else if (playerSelection.toUpperCase() == "PAPER") {
    if (computerSelection.toUpperCase() == "ROCK") {
      updateScore(playerObj);
      return 'you won (paper to rock)';
    }
    else if (computerSelection.toUpperCase() == "PAPER") {
      return 'you tied with the computer (paper to paper)';
    }
    else {
      updateScore(computerObj);
      return 'you lost (paper to scissors)';
    }
  }
  else if (playerSelection.toUpperCase() == "SCISSORS") {
      if (computerSelection.toUpperCase() == "ROCK") {
        updateScore(computerObj);
        return 'you lost (scissors to rock)';
      }
      else if (computerSelection.toUpperCase() == "PAPER") {
        updateScore(playerObj);
        return 'you won (scissors to paper)';
      }
      else {
        return 'you tied with the computer (scissors to scissors)';
      }
  }
}


//HELPER FUNCTIONS

function addResult(resultString) {
    result = document.createElement('p');
    resultsDiv.appendChild(result);
    result.textContent = resultString;
    result = null;
}

function updateScore(competitorObject) {
  competitorObject.score++;
  if (competitorObject == playerObj) {
    competitorObject.display.textContent = "player score" + " " + competitorObject.score;
  }
  else {
    competitorObject.display.textContent = "computer score" + " " + competitorObject.score;
  }
  checkGameOver();
}

//write a helper function to check game over, put it in play janken round
function checkGameOver() {
  if (playerObj.score == 5) {
    //display that the player won
    alert('game over, you won! :)');
    playerObj.score = 0;
    playerObj.display.textContent = `player score: ${playerObj.score}`;
    computerObj.score = 0;
    computerObj.display.textContent = `computer score: ${computerObj.score}`;
  }
  else if (computerObj.score == 5) {
    //display that the computer won
    alert('game over, the computer won! :(');
    playerObj.score = 0;
    playerObj.display.textContent = `player score: ${playerObj.score}`;
    computerObj.score = 0;
    computerObj.display.textContent = `computer score: ${computerObj.score}`;
  }
}
