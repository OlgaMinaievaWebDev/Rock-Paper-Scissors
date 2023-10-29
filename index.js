const resultEl = document.getElementById("result");
const board = document.querySelector(".game");
const gameOverEl = document.querySelector(".reset");
const start = document.querySelector(".start-game");
// start page fades out

// document.querySelector(".myButton").addEventListener("click", function () {
//   console.log("hey");
//   start.classList.remove("active");
//   board.classList.add("active");
//   gameOverEl.classList.add("active");
// });

// populating buttons for player
const playerPickArea = document.querySelector(".player-choice");
const choices = ["rock", "paper", "scissors"];
let playerChoice;
let computerChoice;

let playerScore = 0;
let computerScore = 0;
let roundsPlayed = 0;

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
      generateResult();
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

// generate result and find the Winner
const generateResult = () => {
  switch (playerChoice + choices[computerChoice]) {
    case "scissorsscissors":
    case "paperpaper":
    case "rockrock":
      tie();
      break;
    case "scissorspaper":
    case "paperrock":
    case "rockscissors":
      //resultEl.textContent = "You won";
      win();
      break;
    case "paperscissors":
    case "rockpaper":
    case "scissorsrock":
      //resultEl.textContent = "You lost";
      lost();
    default:
      break;
  }
};

const displayPlayerScore = document.getElementById("player");
const displayComputerScore = document.getElementById("computer");

function win() {
  playerScore++;
  roundsPlayed++;
  if (playerScore < 5) {
    displayPlayerScore.textContent = playerScore;
    resultEl.textContent = `Round ${roundsPlayed}`;
  } else if (playerScore === 5) {
    resultEl.textContent = "You are the Winner";
    gameOver();
  }
}

function lost() {
  computerScore++;
  roundsPlayed++;
  if (computerScore < 5) {
    displayComputerScore.textContent = computerScore;
    resultEl.textContent = `Round ${roundsPlayed}`;
  } else if (computerScore === 5) {
    resultEl.textContent = "You lost this one";
    gameOver();
  }
}

function tie() {
  roundsPlayed++;
  if (playerScore === computerScore) {
    resultEl.textContent = "It is a draw";
    gameOver();
  }
}

function gameOver() {
  playerScore = 0;
  computerScore = 0;
  roundsPlayed = 0;
  displayComputerScore.textContent = 0;
  displayPlayerScore.textContent = 0;
}

// const gameGrid = document.getElementById("game");
// gameGrid.append(
//   userChoiceDisplay,
//   computerChoiceDisplay,
//   resultDisplay,
//   finalResult
// );
let display = 0;
function displayOnOff() {
  let div = document.querySelector(".display");
  if (div.computedStyleMap.display === "none") {
    div.computedStyleMap.display = "block";
  } else {
    div.computedStyleMap.display = "none";
  }
}
