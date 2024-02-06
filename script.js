"use strict";

//Generating Random Number
let secretNumber = Math.trunc(Math.random() * 10) + 1;
let score = 5;

//Check Button and Its Logic
document.querySelector(".check").addEventListener("click", function () {
  let guess = Number(document.querySelector(".ip-filed").value);
  let highScore = 0;
  if (score > 0) {
    if (!guess) {
      document.querySelector(".message").textContent = "Please Add A Number😒";
    } else if (guess === secretNumber) {
      document.querySelector(".message").textContent = "Correct Number🥳!";
      document.querySelector("body").style.backgroundColor = "green";
      document.querySelector(".secret-number").style.height = "60px";
      document.querySelector(".secret-number").style.width = "60px";
      document.querySelector(".secret-number").style.fontSize = "50px";
      document.querySelector(".secret-number").textContent = secretNumber;
      if (score > highScore) {
        highScore = score;
        document.querySelector(".high-score").textContent = highScore;
      }
    } else if (guess > secretNumber) {
      document.querySelector(".message").textContent = "Your Guess Is High 📈";
      score--;
      document.querySelector(".score").textContent = score;
    } else if (guess < secretNumber) {
      document.querySelector(".message").textContent = "Your Guess Is Low 📉";
      score--;
      document.querySelector(".score").textContent = score;
    }
  } else {
    document.querySelector(".message").textContent =
      "You Lost The Game!😭 Press on Restart Button!";
  }
});

//Restart Button Functionality
document.querySelector(".restart").addEventListener("click", function () {
  score = 5;
  secretNumber = Math.trunc(Math.random() * 10) + 1;

  document.querySelector(".score").textContent = score;
  document.querySelector(".message").textContent = "Start Guessing!";
  document.querySelector("body").style.backgroundColor = "black";
  document.querySelector(".ip-filed").value = "";
  document.querySelector(".secret-number").style.width = "40px";
  document.querySelector(".secret-number").style.height = "20px";
  document.querySelector(".secret-number").style.fontSize = "20px";

  document.querySelector(".secret-number").textContent = "?";
});
