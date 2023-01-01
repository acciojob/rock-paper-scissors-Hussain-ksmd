//your code here
let computerChoose;
let turnsLeft;
let userPoints = 0;
let computerPoints = 0;

function playGame() {
  turnsLeft = document.querySelector('#input').value;
  document.querySelector('#rounds-left').textContent = turnsLeft;
}

function select(userChoose) {
  turnsLeft--;
  computerChoose = Math.floor(Math.random() * 3);
  document.querySelector('#computer-choose').textContent = setComputerChoose();
  document.querySelector('#rounds-left').textContent = turnsLeft;

  if (userChoose === setComputerChoose()) {
    document.querySelector('#round-result').textContent = 'Tie';
  } else if (userChoose === 'rock' && setComputerChoose() === 'scissors' || userChoose === 'paper' && setComputerChoose() === 'rock' || userChoose === 'scissors' && setComputerChoose() === 'paper') {
    document.querySelector('#round-result').textContent = 'Won';
    userPoints++;
    document.querySelector('#user-points').textContent = userPoints;
  } else {
    document.querySelector('#round-result').textContent = 'Lose';
    computerPoints++;
    document.querySelector('#computer-points').textContent = computerPoints;
  }

  if (turnsLeft === 0) {
    if (userPoints > computerPoints) {
      document.querySelector('#game-result').textContent = 'Won';
    } else if (userPoints < computerPoints) {
      document.querySelector('#game-result').textContent = 'Lose';
    } else {
      document.querySelector('#game-result').textContent = 'Tie';
    }
  }
}

function setComputerChoose() {
  if (computerChoose === 0) {
    return 'rock';
  } else if (computerChoose === 1) {
    return 'paper';
  } else {
    return 'scissors';
  }
}
