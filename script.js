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
