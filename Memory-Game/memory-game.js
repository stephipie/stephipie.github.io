const gameBoard = document.getElementById("game-board");
const gameOverLayer = document.getElementById("game-over");
const playAgainButton = document.getElementById("play-again");
const cardValues = [1, 2, 3, 4];
let flippedCards = [];
let lockBoard = false;
let matches = 0;


function createGameBoard() {
  console.log("loading gameBoard");
  matches = 0;
  const cards = [...cardValues, ...cardValues];
  cards.sort(() => 0.5 - Math.random());
  gameBoard.innerHTML = '';
  cards.forEach((value, index) => {
    const card = document.createElement("div");
    const cardImage = document.createElement("img");
    cardImage.setAttribute("src", "./images/logo.png");
    cardImage.setAttribute("alt", value);
    card.appendChild(cardImage);
    card.classList.add("card");
    card.dataset.value = value;
    card.dataset.index = index;
    card.addEventListener("click", flipCard);
    gameBoard.appendChild(card);
  });
}

function flipCard(event) {
  console.log("CurrentTarget", event.currentTarget)
  const card = event.currentTarget;
  if (lockBoard === true) {
    console.log("Board locked!")
  } else {
    const tempImage = card.querySelector("img");
    tempImage.setAttribute("src", `./images/card-${card.dataset.value}.png`)
    flippedCards.push(card);
    if (flippedCards.length === 2) {
      lockBoard = true;
      checkmatch();
    }
  }
}
function gameOver() {
  console.log("GAME OVER");
  gameOverLayer.style.display = "block";
  confetti({
    particleCount: 100,
    spread: 70,
    origin: { y: 0.6 },
  });
  playAgainButton.addEventListener('click', () => {
    gameOverLayer.style.display = 'none';
    createGameBoard();
  })
}

function checkmatch() {
  const [card1, card2] = flippedCards;
  if ((card1.dataset.value === card2.dataset.value) && (card1.dataset.index != card2.dataset.index)) {
    console.log("MATCH");
    const matchSound = new Audio('audio/tada.mp3');
    matchSound.play();
    console.log(matchSound);
    card1.removeEventListener("click", flipCard);
    card2.removeEventListener("click", flipCard);
    flippedCards = [];
    lockBoard = false;
    matches = matches + 1;
    if (matches === cardValues.length) {
      console.log("Matches", matches);
      gameOver()
    }
  } else {
    console.log('NOMATCH or same card');
    flippedCards = [];
    const errorSound = new Audio('audio/error.mp3');
    errorSound.play();
    setTimeout(() => {
      card1.querySelector('img').setAttribute('src', './images/logo.png');
      card2.querySelector('img').setAttribute('src', './images/logo.png');
      lockBoard = false;
    }, 1000);
  }
}

createGameBoard();
