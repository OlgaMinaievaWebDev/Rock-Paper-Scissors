const startBtn = document.querySelector("button");
const startGame = document.querySelector(".start-game");
const resultEl = document.getElementById("result");

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
      //resultEl.textContent = `It is a draw`;
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
  if (playerScore === 5) {
    resultEl.textContent = "Game over";
  } else {
    displayPlayerScore.textContent = playerScore;
    resultEl.textContent = `Round ${roundsPlayed}`;
  }
}

function lost() {
  computerScore++;
  roundsPlayed++;
  if (computerScore === 5) {
    resultEl.textContent = "Looser";
  } else {
    displayComputerScore.textContent = computerScore;
    resultEl.textContent = `Round ${roundsPlayed}`;
  }
}

// function win(player, computer) {
//   playerScore++;
//   if (playerScore < 5) {
//     finalResult.textContent = `${computerScore} ${playerScore}`;
//   } else if (playerScore === 5) {
//     finalResult.textContent = "You won";
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

// const gameGrid = document.getElementById("game");
// gameGrid.append(
//   userChoiceDisplay,
//   computerChoiceDisplay,
//   resultDisplay,
//   finalResult
// );
