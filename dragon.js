console.log("dragon script running");
// variables
let petCount;
let happiness;
let weight;
let growlCount;
let gamePlaying;
let image = document.getElementById("nightFury");

// initialize game
init();

// When each button is clicked, it will "call" function for that button (functions are below)
document
  .querySelector(".feed-button")
  .addEventListener("click", clickedFeedButton);
document
  .querySelector(".pet-button")
  .addEventListener("click", clickedPetButton);
document
  .querySelector(".play-button")
  .addEventListener("click", clickedPlayButton);
document
  .querySelector(".fly-button")
  .addEventListener("click", clickedFlyButton);
document
  .querySelector(".restart-button")
  .addEventListener("click", clickedRestartButton);

function clickedFeedButton() {
  if (gamePlaying) {
    // Increase pet happiness
    happiness += 1;
    console.log(happiness);
    // Increase pet weight
    weight += 2;
    console.log(weight);
    // check if the game has ended
    endGame();
    if (weight === 20) {
      growl();
    }
  }
}

function clickedPetButton() {
  if (gamePlaying) {
    if (happiness < 5) {
      loseGame();
    } else {
      // Increase pet happiness
      happiness += 2;
      console.log(happiness);
      // Increase pet count
      petCount += 1;
      console.log(petCount);
      // check if the game has ended
      endGame();
      if (petCount === 15) {
        growl();
      }
    }
  }
}

function clickedPlayButton() {
  if (gamePlaying) {
    if (petCount < 5) {
      loseGame();
    } else {
      // Increase pet happiness
      happiness += 3;
      console.log(happiness);
      // Decrease pet weight
      weight -= 2;
      console.log(weight);
      // check if the game has ended
      endGame();
      if (weight === 0) {
        growl();
      }
    }
  }
}

function clickedFlyButton() {
  if (gamePlaying) {
    if (happiness < 100) {
      loseGame();
    } else {
      // Increase pet happiness
      happiness += 10;
      console.log(happiness);
      // Decrease pet weight
      weight -= 3;
      console.log(weight);
      // check if the game has ended
      endGame();
      if (weight === 0) {
        growl();
      }
    }
  }
}

function clickedRestartButton() {
  init();
}

// function to warn of low scores
function growl() {
  if (growlCount === 3) {
    loseGame();
  } else {
    alert("Grr...");
    growlCount += 1;
  }
}

// function to end the game
function endGame() {
  if (petCount > 15 || happiness < 0 || weight < 0 || weight > 20) {
    loseGame();
  } else if (happiness > 222) {
    winGame();
  } else {
    image.src = "img/traintoothless.jpg";
  }
}

// function to lose game
function loseGame() {
  image.src = "img/angrytoothless.jpg";
  document.querySelector("#status").textContent =
    "Sorry, you failed to train the Night Fury!";
  gamePlaying = false;
}

// function to win game
function winGame() {
  image.src = "img/happytoothless.jpg";
  document.querySelector("#status").textContent =
    "Congratulations! You successfully trained the Night Fury!";
  gamePlaying = false;
}

// function to initialize game
function init() {
  petCount = 0;
  happiness = 0;
  weight = 0;
  growlCount = 0;
  image.src = "img/traintoothless.jpg";
  document.querySelector("#status").textContent = 
  gamePlaying = true;
}
