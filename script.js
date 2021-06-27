const scoreOne = document.querySelector("#scoreOne");
const scoreTwo = document.querySelector("#scoreTwo");
const playerOne = document.querySelector("#playerOne");
const playerTwo = document.querySelector("#playerTwo");

for (let i = 0; i <= 5; i++){
    playerOne.addEventListener("click", () => {
        scoreOne.innerText = i;
    });
}

for (let i = 0; i <= 5; i++){
 playerTwo.addEventListener("click", () => {
        scoreTwo.innerText = i;
    })
}