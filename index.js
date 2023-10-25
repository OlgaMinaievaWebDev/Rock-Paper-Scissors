const userChoiceDisplay = document.createElement("h1");
const computerChoiceDisplay = document.createElement("h1");
const resultDisplay = document.createElement("h1");
const gameGrid = document.getElementById("game");

gameGrid.append(userChoiceDisplay, computerChoiceDisplay, resultDisplay);

const choices = ["rock", "paper", "scissors"];

const userChoice = () => {
  console.log('clicked');
}

for (let i = 0; i < choices.length; i++) {
  const button = document.createElement('button');
  button.id = choices[i];
  button.innerHTML = choices[i];
  button.addEventListener('click', userChoice);
  gameGrid.appendChild(button);
  }