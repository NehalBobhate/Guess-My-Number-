"use strict";

//Generating Random Number
let secretNumber = Math.trunc(Math.random() * 10) + 1;
let score = 5;
const displayMessage = (message) => {
  document.querySelector(".message").textContent = message;
};

//Check Button and Its Logic
document.querySelector(".check").addEventListener("click", function () {
  let guess = Number(document.querySelector(".ip-filed").value);
  let highScore = 0;
  //IF score is 0 you have to press restart
  if (score > 0) {
    //If you pass empty number
    if (!guess) {
      displayMessage("Please Add A Number😒");
    } else if (guess === secretNumber) {
      displayMessage("Correct Number🥳!");
      document.querySelector("body").style.backgroundColor = "green";
      let style = document.querySelector(".secret-number").style;
      style.height = "60px";
      style.width = "60px";
      style.fontSize = "50px";
      document.querySelector(".secret-number").textContent = secretNumber;
      if (score > highScore) {
        highScore = score;
        document.querySelector(".high-score").textContent = highScore;
      }
    } else if (guess !== secretNumber) {
      displayMessage(
        guess > secretNumber ? "Your Guess Is High 📈" : "Your Guess Is Low 📉"
      );

      score--;
      document.querySelector(".score").textContent = score;
    }
  } else {
    displayMessage("You Lost The Game!😭 Press on Restart Button!");
  }
});

//Restart Button Functionality
document.querySelector(".restart").addEventListener("click", function () {
  score = 5;
  secretNumber = Math.trunc(Math.random() * 10) + 1;

  document.querySelector(".score").textContent = score;
  displayMessage("Start Guessing!");
  document.querySelector("body").style.backgroundColor = "black";
  document.querySelector(".ip-filed").value = "";
  let style = document.querySelector(".secret-number").style;
  style.width = "40px";
  style.height = "20px";
  style.fontSize = "20px";

  document.querySelector(".secret-number").textContent = "?";
});
