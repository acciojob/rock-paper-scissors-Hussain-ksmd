const gameNumberInput = document.getElementById("game-number");
const playButton = document.getElementById("play-game");
const gameContainer = document.getElementById("game-container");
const choices = document.querySelectorAll("[data-ns-test='rock'], [data-ns-test='paper'], [data-ns-test='scissors']");
const roundsLeft = document.querySelector("[data-ns-test='rounds-left']");
const userPoints = document.querySelector("[data-ns-test='user-points']");
const computerPoints = document.querySelector("[data-ns-test='computer-points']");
const computerChoose = document.querySelector("[data-ns-test='computer-choose']");
const roundResult = document.querySelector("[data-ns-test='round-result']");
const gameResult = document.querySelector("[data-ns-test='game-result']");

let gameNumber = null;
let userChoice = null;
let computerChoice = null;

window.computerChoose = function() {
  return Math.floor(Math.random() * 3);
};

playButton.addEventListener("click", function() {
  gameNumber = gameNumberInput.value;
  gameContainer.style.display = "block";
  roundsLeft.innerText = gameNumber;
});

for (let choice of choices) {
  choice.addEventListener("click", function() {
    userChoice = this.innerText.toLowerCase();
    computerChoice = ["rock", "paper", "scissors"][window.computerChoose()];
    computerChoose.innerText = `Computer choose: ${computerChoice}`;
    if (userChoice === computerChoice) {
      roundResult.innerText = "Round result: Tie";
    } else if (userChoice === "rock" && computerChoice === "scissors" || userChoice === "paper" && computerChoice === "rock" || userChoice === "scissors" && computerChoice === "paper") {
      roundResult.innerText = "Round result: Won";
      userPoints.innerText = parseInt(userPoints.innerText) + 1;
    } else {
      roundResult.innerText = "Round result: Lose";
      computerPoints.innerText = parseInt(computerPoints.innerText) + 1;
    }
    roundsLeft.innerText = parseInt(roundsLeft.innerText) - 1;
    if (roundsLeft.innerText === "0") {
      if (userPoints.innerText > computerPoints.innerText) {
        gameResult.innerText = "Game result: Won";
      } else if (userPoints.innerText < computerPoints.innerText) {
        gameResult.innerText = "Game result: Lose";
      } else {
        gameResult.innerText = "Game result: Tie";
      }
    }
  });
}
