import "./style.css";
import { getComputerChoice, getResults } from "./gameLogic";

const startScreen = document.getElementById("startscreen");
const startButton = document.getElementById("startbutton");
const rulesButton = document.getElementById("rulesbutton");
const rulesElement = document.querySelector("#rules");
const scoreElement = document.getElementById("score");
const resultsElement = document.getElementById("results");
const choiceButtons = document.querySelectorAll("button[data-choice]"); // Function to choose a button
const playerResultElement = document.querySelector("#userchoice>div");
const computerResultElement = document.querySelector("#computerchoice>div");
const resultTextElement = document.querySelector("#result");

let score = 0;

const borderColors = ["border-rock", "border-scissors", "border-paper"];

// Function to hide Starting Screen
function startGame() {
  startScreen.classList.add("hidden");
}

// Event Listener for the start button "Start Game"
startButton.addEventListener("click", startGame);

rulesButton.addEventListener("click", () => {
    rulesElement.classList.toggle("hidden");
});

rulesElement.querySelector("#closebutton").addEventListener("click", () => {
    rulesElement.classList.toggle("hidden");
});

choiceButtons.forEach((button) => {
  button.addEventListener("click", (event) => {
    const playerChoice = event.currentTarget.getAttribute("data-choice");
    const computerChoice = getComputerChoice();
    const result = getResults(playerChoice, computerChoice);
    updateUI(playerChoice, computerChoice, result);
  });
});

// Function to play again

resultsElement
  .querySelector("#playagain")
  .addEventListener("click", () => {
    resultsElement.classList.toggle("hidden");
  });

function updateUI(playerChoice, computerChoice, result) {
  let resultText = "it´s a draw";
  if (result === "win") {
    resultText = "You Win";
    score++;
  } else if (result === "lose") {
    resultText = "You Lose";
    score--;
  };
  

  resultTextElement.innerText = resultText;

  scoreElement.innerText = score;

  resultsElement.classList.toggle("hidden");
  playerResultElement.querySelector("img").src = `images/${playerChoice}.svg`;
  playerResultElement.querySelector("img").alt = playerChoice;
  playerResultElement.classList.remove(...borderColors);
  playerResultElement.classList.add(`border-${playerChoice}`);
  computerResultElement.querySelector("img").src =
    `images/${computerChoice}.svg`;
  computerResultElement.querySelector("img").alt = computerChoice;
  computerResultElement.classList.remove(...borderColors);
  computerResultElement.classList.add(`border-${computerChoice}`);
};
