const startBtn = document.querySelector("button");
const startGame = document.querySelector(".start-game");

// start page fades out
startBtn.addEventListener("click", () => {
  console.log("clicked");
  startGame.classList.add("fadeIn");
});

// populating buttons for player
const playerPickArea = document.querySelector(".player-choice");
const choices = ["rock", "paper", "scissors"];
let playerChoice;
let computerChoice;

function populateButtons() {
  for (let i = 0; i < choices.length; i++) {
    const buttonPlayerPick = document.createElement("button");
    buttonPlayerPick.textContent = choices[i];
    buttonPlayerPick.id = choices[i];
    playerPickArea.append(buttonPlayerPick);
    buttonPlayerPick.addEventListener("click", function (e) {
      playerChoice = e.target.id;
      const playerHand = document.querySelector(".player-hand");
      switch (playerChoice) {
        case "rock":
          playerHand.innerHTML = `<i class="fa-regular fa-hand-back-fist"></i>`;
          break;
        case "paper":
          playerHand.innerHTML = `<i class="fa-regular fa-hand"></i>`;
          break;
        case "scissors":
          playerHand.innerHTML = `<i class="fa-regular fa-hand-scissors"></i>`;
          break;
        default:
          break;
      }
      generateComputerChoice();
    });
  }
}
populateButtons();

// Computer options function
const generateComputerChoice = () => {
  let randNum = Math.floor(Math.random() * choices.length);
  computerChoice = randNum;
  const computerHand = document.querySelector(".computer-hand");
  switch (choices[computerChoice]) {
    case "rock":
      computerHand.innerHTML = `<i class="fa-regular fa-hand-back-fist"></i>`;
      break;
    case "paper":
      computerHand.innerHTML = `<i class="fa-regular fa-hand"></i>`;
      break;
    case "scissors":
      computerHand.innerHTML = `<i class="fa-regular fa-hand-scissors"></i>`;
      break;
    default:
      break;
  }
};

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
