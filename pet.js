console.log("pet script running");
// variables
let petCount;
let happiness;
let weight;
let gamePlaying;
const image = document.getElementById("nightFury");
const petButton = document.querySelector("button");

// initialize game
init();

// When each button is clicked, it will "call" function for that button (functions are below)
  document.querySelector('.feed-button').click(clickedFeedButton);
  document.querySelector('.play-button').click(clickedPlayButton);
  document.querySelector('.pet-button').click(clickedPetButton);
  document.querySelector('.train-button').click(clickedTrainButton);

  function clickedFeedButton() {
    // Increase pet happiness
    happiness += 1;
    console.log(happiness);
    // Increase pet weight
    weight += 1;
    console.log(weight);
    checkAndUpdatePetInfoInHtml();
  }
  
  function clickedPlayButton() {
    // Increase pet happiness
    happiness += 1;
    console.log(happiness);
    // Decrease pet weight
    weight -= 1;
    console.log(weight);
    checkAndUpdatePetInfoInHtml();
  }
  
  function clickedPetButton() {
    // Increase pet happiness
    happiness += 1;
    // Increase pet count
    petCount +=1;
    console.log(petCount);
    checkAndUpdatePetInfoInHtml();
  }

  function clickedTrainButton() {
    // Decrease pet happiness
    happiness -= 1;
    console.log(happiness);
    checkAndUpdatePetInfoInHtml();
  }

  function checkAndUpdatePetInfoInHtml() {
    checkWeightAndHappinessBeforeUpdating();  
    updatePetInfoInHtml();
  }
  
  function checkWeightAndHappinessBeforeUpdating() {
    // Add conditional so if weight is lower than zero, set it back to zero
    if (pet_info.weight < 1) pet_info.weight = 1;
    if (pet_info.happiness < 1) pet_info.happiness = 0;
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
