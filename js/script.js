//Use bizga ...
"use strict";

let elCheck = document.querySelector(".check");
let elGuessInput = document.querySelector(".guess");
let elMessage = document.querySelector(".message");
let elSecretNumber = document.querySelector(".number");
let elScore = document.querySelector(".score");
let elHighScore = document.querySelector(".highscore");
let elAgain = document.querySelector(".again");

let secretNumber = Math.ceil(Math.random() * 20);

let score = 10;
let highScore = 0;

elCheck.addEventListener("click", function () {
  let elGuessInputValue = elGuessInput.value * 1;

  if (!elGuessInputValue) {
    elMessage.textContent = "Iltimos son kiriting!!!";
  } else if (elGuessInputValue === secretNumber) {
    elSecretNumber.textContent = secretNumber;
    elMessage.textContent = "Tushdi!!!";
    document.body.style.backgroundColor = "#60b347";

    if (score > highScore) {
      highScore = score;
      elHighScore.textContent = highScore;
    }
    elCheck.disabled = true;
  } else if (elGuessInputValue > secretNumber) {
    elMessage.textContent = "Bu raqam katta!!!";
    score--;
    elScore.textContent = score;

    if (score <= 0) {
      elMessage.textContent = "Game over!!!";
      document.body.style.backgroundColor = "red";
      elSecretNumber.textContent = secretNumber;
      elCheck.disabled = true;
    }
  } else if (elGuessInputValue < secretNumber) {
    elMessage.textContent = "Bu raqam kichik!!!";
    score--;
    elScore.textContent = score;

    if (score <= 0) {
      elMessage.textContent = "Game over!!!";
      document.body.style.backgroundColor = "red";
      elSecretNumber.textContent = secretNumber;
      elCheck.disabled = true;
    }
  }

  elGuessInput.value = null;
});

elAgain.addEventListener("click", function () {
  score = 10;
  elScore.textContent = score;
  document.body.style.backgroundColor = "#222";
  elGuessInput.value = null;
  secretNumber = Math.ceil(Math.random() * 20);
  elSecretNumber.textContent = "?";
  elMessage.textContent = "Loading...";
  elCheck.disabled = false;
});
