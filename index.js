const startBtn = document.querySelector("button");
const startGame = document.querySelector(".start-game");

startBtn.addEventListener("click", () => {
  console.log("clicked");
  startGame.classList.add("fadeIn");
});

// const userChoiceDisplay = document.createElement("h1");
// const computerChoiceDisplay = document.createElement("h1");
// const resultDisplay = document.createElement("h1");
// const finalResult = document.createElement("h1");
// const gameGrid = document.getElementById("game");
// gameGrid.append(
//   userChoiceDisplay,
//   computerChoiceDisplay,
//   resultDisplay,
//   finalResult
// );

// const choices = ["rock", "paper", "scissors"];
// let playerSelection;
// let computerChoice;

// const playRound = (e) => {
//   playerSelection = e.target.id;
//   userChoiceDisplay.textContent = `you: ${playerSelection}`;
//   generateComputerChoice();
//   generateResult();
// };

// const generateComputerChoice = () => {
//   const randomChoice = choices[Math.floor(Math.random() * choices.length)];
//   computerChoice = randomChoice;
//   computerChoiceDisplay.textContent = `computer: ${computerChoice}`;
// };

// const generateResult = () => {
//   switch (playerSelection + computerChoice) {
//     case "scissorsscissors":
//     case "paperpaper":
//     case "rockrock":
//       resultDisplay.textContent = "Its a Draw 😎";
//       draw(playerSelection, computerChoice);
//       break;
//     case "scissorspaper":
//     case "paperrock":
//     case "rockscissors":
//       resultDisplay.textContent = "You won 🤩";
//       win(playerSelection, computerChoice);
//       break;
//     case "paperscissors":
//     case "rockpaper":
//     case "scissorsrock":
//       resultDisplay.textContent = "You lost 😩";
//       loose(playerSelection, computerChoice);
//       break;
//   }
// };

// for (let i = 0; i < choices.length; i++) {
//   const button = document.createElement("button");
//   button.id = choices[i];
//   button.textContent = choices[i];
//   button.addEventListener("click", playRound);
//   gameGrid.appendChild(button);
// }

// let playerScore = 0;
// let computerScore = 0;
// let roundsPlayed = 0;

// function win(player, computer) {
//   playerScore++;
//   if (playerScore < 5) {
//     finalResult.textContent = `${computerScore} ${playerScore}`;
//   } else if (playerScore === 5) {
//     finalResult.textContent = "You won";
//     endGame();
//   }
// }

// function loose(player, computer) {
//   computerScore++;
//   finalResult.textContent = `You lost`;
//   if (computerScore < 5) {
//     finalResult.textContent = `${computerScore} ${playerScore}`;
//   } else if (computerScore === 5) {
//     finalResult.textContent = `You lost`;
//     endGame();
//   }
// }

// function draw(player, computer) {
//   finalResult.textContent = `It is a tie`;
// }

// function endGame() {
//   playerScore = 0;
//   computerScore = 0;
// }
