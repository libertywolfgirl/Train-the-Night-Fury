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
  document.querySelector('.feed-button').addEventListener('click', (clickedFeedButton));
  document.querySelector('.play-button').addEventListener('click', (clickedPlayButton));
  document.querySelector('.pet-button').addEventListener('click', (clickedPetButton));
  document.querySelector('.train-button').addEventListener('click', (clickedTrainButton));

  function clickedFeedButton() {
    if (gamePlaying) {
      // Increase pet happiness
      happiness += 1;
      console.log(happiness);
      // Increase pet weight
      weight += 1;
      console.log(weight);
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
    }
  }
  
  function clickedPetButton() {
   if (gamePlaying) {
     // Increase pet happiness
    happiness += 1;
    console.log(happiness);
    // Increase pet count
    petCount +=1;
    console.log(petCount);
   }
  }

  function clickedTrainButton() {
    if (gamePlaying) {
      // Decrease pet happiness
    happiness -= 1;
    console.log(happiness);
    } 
  }

// play the game
/*petButton.addEventListener("click", e => {
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
  if (petCount > 15) {
    image.src = "img/grumpyBun.jpg";
    document.querySelector("#status").textContent = "You failed!";
    gamePlaying = false;
  } else {
    image.src = "img/happyBun.jpg";
  }
}*/

// function to initialize game
function init() {
  petCount = 0;
  happiness = 0;
  weight = 10;
  gamePlaying = true;
}
