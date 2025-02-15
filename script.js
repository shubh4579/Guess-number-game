"use strict";

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

document.querySelector(".check").addEventListener("click", checkGuess);

document.querySelector(".guess").addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    checkGuess();
  }
});

function checkGuess() {
  const guess = Number(document.querySelector(".guess").value);

  console.log(guess, typeof guess);
  // when there is no input

  if (!guess) {
    document.querySelector(".message").textContent = " ⛔ No number";
    // when players wins
  } else if (guess == secretNumber) {
    document.querySelector(".message").textContent = "🥳 Correct Number!";

    document.querySelector(".number").textContent = secretNumber;

    document.querySelector("body").style.backgroundColor = "#60b347";

    document.querySelector(".number").style.width = "20rem";

    if (score > highscore) {
      highscore = score;
      document.querySelector(".highscore").textContent = highscore;
    }

    // when guess is too high
  } else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector(".message").textContent = "📈 Number Too High!";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent = "🥲 You lost the game!";
      document.querySelector(".score").textContent = 0;
    }

    // when guess is too low
  } else if (guess < secretNumber) {
    if (score > 1) {
      document.querySelector(".message").textContent = "📉 Number Too Low!";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".score").textContent = "🥲 You lost the game!";
      document.querySelector(".score").textContent = 0;
    }
  }
}

document.querySelector(".again").addEventListener("click", function () {
  document.querySelector(".message").textContent = "Start Guessing...";

  score = 20;
  document.querySelector(".score").textContent = 20;

  secretNumber = Math.trunc(Math.random() * 20) + 1;

  document.querySelector("body").style.backgroundColor = "#222";

  document.querySelector(".number").style.width = "150px";

  document.querySelector(".number").textContent = "?";

  document.querySelector(".guess").value = "";
});
