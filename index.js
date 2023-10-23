let computerChoice;

function getComputerChoice() {
  let randomNumber = Math.floor(Math.random() * 3 + 1);
  if (randomNumber === 1) {
    computerChoice = "rock";
  }
  if (randomNumber === 2) {
    computerChoice = "paper";
  }
  if (randomNumber === 3) {
    computerChoice = "scissors";
  }
  console.log(computerChoice);
}

let playerChoice = prompt("Please choose 'rock', 'paper' or 'scissors'");
let player = playerChoice.trim().toLocaleLowerCase();
if (player === "rock" || player === "paper" || player === "scissors") {
  console.log(player);
  getComputerChoice();
} else {
  alert("You did not enter correct");
}

function playRound() {
  if (computerChoice === player) {
    console.log("It is a Draw");
  }
  if (computerChoice === "rock" && player === "paper") {
    console.log("You Win");
  }
  if (computerChoice === "rock" && player === "scissors") {
    console.log("You Lost");
  }
  if (computerChoice === "paper" && player === "scissors") {
    console.log("You Win");
  }
  if (computerChoice === "paper" && player === "rock") {
    console.log("You Lost");
  }
  if (computerChoice === "scissors" && player === "rock") {
    console.log("You Win");
  }
  if (computerChoice === "scissors" && player === "paper") {
    console.log("You Lost");
  }
}
playRound();
