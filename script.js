const playerOne = {
  score: 0,
  button: document.querySelector("#playerOneButton"),
  display: document.querySelector("#playerOneScore"),
};

const playerTwo = {
  score: 0,
  button: document.querySelector("#playerTwoButton"),
  display: document.querySelector("#playerTwoScore"),
};

const resetButton = document.querySelector(".reset");
const gameScoreSelect = document.querySelector("#playTo");
let winningScore = 5;
let isGameOver = false;

function displayScore(player, opponent) {
  if (!isGameOver) {
    player.score += 1;
    if (player.score === winningScore) {
      isGameOver = true;
      player.display.style.color = "green";
      opponent.display.style.color = "red";
      player.button.disabled = true;
      opponent.button.disabled = true;
    }
    player.display.textContent = player.score;
  }
}

playerOne.button.addEventListener("click", () => {
  displayScore(playerOne, playerTwo);
});

playerTwo.button.addEventListener("click", () => {
  displayScore(playerTwo, playerOne);
});

gameScoreSelect.addEventListener("change", (event) => {
  winningScore = parseInt(event.target.value);
  reset();
});

resetButton.addEventListener("click", reset);

function reset() {
  isGameOver = false;
  playerOne.score = 0;
  playerTwo.score = 0;
  playerOne.display.textContent = 0;
  playerTwo.display.textContent = 0;
  playerOne.display.style.color = "black";
  playerTwo.display.style.color = "black";
  playerOne.button.disabled = false;
  playerTwo.button.disabled = false;
}
