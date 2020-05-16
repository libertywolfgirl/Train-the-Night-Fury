console.log("pet script running");
// variables
let petCount;
let happiness;
let weight;
let gamePlaying;
const image = document.getElementById("nightFury");

// initialize game
init();

// When each button is clicked, it will "call" function for that button (functions are below)
document
  .querySelector(".feed-button")
  .addEventListener("click", clickedFeedButton);
document
  .querySelector(".play-button")
  .addEventListener("click", clickedPlayButton);
document
  .querySelector(".pet-button")
  .addEventListener("click", clickedPetButton);
document
  .querySelector(".train-button")
  .addEventListener("click", clickedTrainButton);

function clickedFeedButton() {
  if (gamePlaying) {
    // Increase pet happiness
    happiness += 1;
    console.log(happiness);
    // Increase pet weight
    weight += 1;
    console.log(weight);
    // check if the game has ended
    endGame();
  }
}

function clickedPlayButton() {
  if (gamePlaying) {
    // Increase pet happiness
    happiness += 1;
    console.log(happiness);
    // Decrease pet weight
    weight -= 1;
    console.log(weight);
    // check if the game has ended
    endGame();
  }
}

function clickedPetButton() {
  if (gamePlaying) {
    // Increase pet happiness
    happiness += 1;
    console.log(happiness);
    // Increase pet count
    petCount += 1;
    console.log(petCount);
    // check if the game has ended
    endGame();
  }
}

function clickedTrainButton() {
  if (gamePlaying) {
    // Decrease pet happiness
    happiness -= 1;
    console.log(happiness);
    // check if the game has ended
    endGame();
  }
}

// create function to end the game
function endGame() {
  if (petCount > 15 || happiness < 5 || weight < 5 || weight > 20) {
    image.src = "img/grumpyBun.jpg";
    document.querySelector("#status").textContent = "You failed!";
    gamePlaying = false;
  } else {
    image.src = "img/happyBun.jpg";
  }
}

// function to initialize game
function init() {
  petCount = 0;
  happiness = 10;
  weight = 10;
  gamePlaying = true;
}
