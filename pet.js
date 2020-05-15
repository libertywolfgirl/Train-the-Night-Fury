console.log("pet script running");
// variables
let petCount;
let gamePlaying;
const petButton = document.querySelector("button");

// initialize game
init();

// play the game
petButton.addEventListener("click", e => {
  if (gamePlaying) {
    // print out the element that we've selected
    console.log("Button pressed!");
    petCount += 1;
    console.log(`You pet the Night Fury ${petCount} times`);

    // check if the game has ended
    endGame();
  }
});

// create function to end the game
function endGame() {
  let image = document.getElementById("nightFury");
  if (petCount > 15) {
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
  gamePlaying = true;
}
