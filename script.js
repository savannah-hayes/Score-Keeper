const playerOne = document.querySelector("#playerOneScore");
const playerTwo = document.querySelector("#playerTwoScore");
const playerOneButton = document.querySelector("#playerOneButton");
const playerTwoButton = document.querySelector("#playerTwoButton");
const resetButton = document.querySelector(".reset");
let playerOneScore = 0;
let playerTwoScore = 0;
let winningScore = 5;

playerOneButton.addEventListener("click", () => {
  playerOneScore += 1;
  playerOne.textContent = playerOneScore;
  if (playerOneScore === winningScore) {
    playerOne.style.color = "green";
    playerTwo.style.color = "red";
    playerOneButton.disabled = true;
    playerTwoButton.disabled = true;
  }
});

playerTwoButton.addEventListener("click", () => {
  playerTwoScore += 1;
  playerTwo.textContent = playerTwoScore;
  if (playerTwoScore === winningScore) {
    playerTwo.style.color = "green";
    playerOne.style.color = "red";
    playerOneButton.disabled = true;
    playerTwoButton.disabled = true;
  }
});
