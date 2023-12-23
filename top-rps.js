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
let playerSelection = 0;


let rock = document.querySelector("#rock");
let paper = document.querySelector("#paper");
let scissors = document.querySelector("#scissors")


rock.addEventListener('click', () =>{
  let playerSelection = rock.value;
  playRPS(playerSelection)});

paper.addEventListener('click', () => {
  let playerSelection = paper.value;
  playRPS(playerSelection);
})

scissors.addEventListener('click', () => {
  let playerSelection = scissors.value;
  playRPS(playerSelection);
})

//Score Tallies
let botTally = document.querySelector("#botScore")

let playerTally = document.querySelector("#playerScore")


function playRPS(playerSelection)  {
  getComputerChoice();
  if (computerSelection == playerSelection) {
    document.getElementById("result").innerHTML = "You tied, Nobody Wins!";
  } else if (computerSelection == "rock" && playerSelection == "scissors") {
    document.getElementById("result").innerHTML = "Bot chose Rock! You Lose!";
    botTally.innerText = botScore += 1;
  } else if (computerSelection == "paper" && playerSelection == "scissors") {
    document.getElementById("result").innerHTML = "Bot Chose Paper! You win!";
    playerTally.innerText = playerScore += 1;
  } else if (computerSelection == "scissors" && playerSelection == "rock") {
    document.getElementById("result").innerHTML =
      "Bot Chose Scissors! You Win!";
      playerTally.innerText = playerScore += 1;
    } else if (computerSelection == "paper" && playerSelection == "rock") {
    document.getElementById("result").innerHTML = " Bot Chose Paper! You Lose!";
    botTally.innerText = botScore += 1;
  } else if (computerSelection == "rock" && playerSelection == "paper") {
    document.getElementById("result").innerHTML = "Bot Chose Rock! You Win!";
    playerTally.innerText = playerScore += 1;
  } else if (computerSelection == "scissors" && playerSelection == "paper") {
    document.getElementById("result").innerHTML =
      " Bot Chose Scissors! You Lose!";
    botTally.innerText = botScore += 1;
  } else if (
    playerSelection !== "rock" ||
    playerSelection !== "scissors" ||
    playerSelection !== "paper"
  ) {
    document.getElementById("result").innerHTML =
      "You must select either Rock, Paper or Scissors!";
  }
  if (botScore == 5){
    document.getElementById("result").innerHTML = "The Bot has reached a score of 5 and has won this match!"
    console.log("RESETTING SCORES")
    playerTally.innerText = 0;
    botTally.innerText = 0;
    botScore = 0;
    playerScore = 0;
  }
  else if(playerScore == 5){
    document.getElementById("result").innerHTML = "The Player has reached a score of 5 and has won this match!"
    console.log("RESETTING SCORES")
    playerTally.innerText = 0;
    botTally.innerText = 0;
    botScore = 0;
    playerScore = 0;
  }
  };
