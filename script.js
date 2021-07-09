const playerOne = document.querySelector("#playerOneScore");
const playerTwo = document.querySelector("#playerTwoScore");
const playerOneButton = document.querySelector("#playerOneButton");
const playerTwoButton = document.querySelector("#playerTwoButton");
const resetButton = document.querySelector(".reset");

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
      playerOneButton.disabled = true;
      playerTwoButton.disabled = true;
    }
    playerOne.textContent = playerOneScore;
  }

  resetScoring();
});

playerTwoButton.addEventListener("click", () => {
  if (!isGameOver) {
    playerTwoScore += 1;
    if (playerTwoScore === winningScore) {
      isGameOver = true;
      playerTwo.style.color = "green";
      playerOne.style.color = "red";
      playerOneButton.disabled = true;
      playerTwoButton.disabled = true;
    }
    playerTwo.textContent = playerTwoScore;
  }

  resetScoring();
});

function resetScoring() {
  resetButton.addEventListener("click", () => {
    playerOne.innerHTML = 0;
    playerTwo.innerHTML = 0;
    playerOne.style.color = "black";
    playerTwo.style.color = "black";
  });
  resetButton.addEventListener("click", () => {
    playerOne.innerHTML = 0;
    playerTwo.innerHTML = 0;
    playerOne.style.color = "black";
    playerTwo.style.color = "black";
  });
}
