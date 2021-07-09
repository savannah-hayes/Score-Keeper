const playerOne = document.querySelector("#playerOneScore");
const playerTwo = document.querySelector("#playerTwoScore");
const playerOneButton = document.querySelector("#playerOneButton");
const playerTwoButton = document.querySelector("#playerTwoButton");
const resetButton = document.querySelector(".reset");
const gameScoreSelect = document.querySelector("#playTo");

let playerOneScore = 0;
let playerTwoScore = 0;
let winningScore = 5;
let isGameOver = false;

playerOneButton.addEventListener("click", () => {
  if (!isGameOver) {
    playerOneScore += 1;
    if (playerOneScore === winningScore) {
      isGameOver = true;
      playerOne.style.color = "green";
      playerTwo.style.color = "red";
    }
    playerOne.textContent = playerOneScore;
  }
});

playerTwoButton.addEventListener("click", () => {
  if (!isGameOver) {
    playerTwoScore += 1;
    if (playerTwoScore === winningScore) {
      isGameOver = true;
      playerTwo.style.color = "green";
      playerOne.style.color = "red";
    }
    playerTwo.textContent = playerTwoScore;
  }
});

gameScoreSelect.addEventListener("change", (event) => {
  winningScore = parseInt(event.target.value);
  reset();
});

resetButton.addEventListener("click", reset);

function reset() {
  isGameOver = false;
  playerOneScore = 0;
  playerTwoScore = 0;
  playerOne.textContent = 0;
  playerTwo.textContent = 0;
  playerOne.style.color = "black";
  playerTwo.style.color = "black";
}
