// Defines basis of scoring system
let botScore = 0;
let playerScore = 0;

// Defines the Computers choice when called upon.

function getComputerChoice() {
  computerSelection = Math.floor(Math.random() * 3 + 1);
  if (computerSelection == 1) {
    computerSelection = "rock";
  } else if (computerSelection == 2) {
    computerSelection = "paper";
  } else if (computerSelection == 3) {
    computerSelection = "scissors";
  } else {
    return "Invalid Error";
  }
  console.log(computerSelection);
}
// Reads the user input and determines the user choice from said input, it is case insensitive, it then compares the user input and computerSelection
// Determines a winner from the two.

document.getElementById("play").onclick = function () {
  getComputerChoice();
  let playerSelection = document.getElementById("playerSelection").value;
  playerSelection = playerSelection.toLowerCase();
  if (computerSelection == playerSelection) {
    document.getElementById("result").innerHTML = "You tied, Nobody Wins!";
  } else if (computerSelection == "rock" && playerSelection == "scissors") {
    document.getElementById("result").innerHTML = "Bot chose Rock! You Lose!";
    botScore + 1;
  } else if (computerSelection == "paper" && playerSelection == "scissors") {
    document.getElementById("result").innerHTML = "Bot Chose Paper! You win!";
    playerScore + 1;
  } else if (computerSelection == "scissors" && playerSelection == "rock") {
    document.getElementById("result").innerHTML =
      "Bot Chose Scissors! You Win!";
    playerScore + 1;
  } else if (computerSelection == "paper" && playerSelection == "rock") {
    document.getElementById("result").innerHTML = " Bot Chose Paper! You Lose!";
    botScore + 1;
  } else if (computerSelection == "rock" && playerSelection == "paper") {
    document.getElementById("result").innerHTML = "Bot Chose Rock! You Win!";
    playerScore + 1;
  } else if (computerSelection == "scissors" && playerSelection == "paper") {
    document.getElementById("result").innerHTML =
      " Bot Chose Scissors! You Lose!";
    botScore + 1;
  } else if (
    playerSelection !== "rock" ||
    playerSelection !== "scissors" ||
    playerSelection !== "paper"
  ) {
    document.getElementById("result").innerHTML =
      "You must select either Rock, Paper or Scissors!";
  }
  console.log(playerSelection, computerSelection);
};
