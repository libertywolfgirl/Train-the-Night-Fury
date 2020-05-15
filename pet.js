console.log("pet script running");
// variables
let petCount;
let gamePlaying;

// select the button on our page that says 'click me'
const petButton = document.querySelector("button");
console.log(petButton);

// create function to change image
function changeImage() {
  let image = document.getElementById("nightFury");
  if (petCount > 15) {
    image.src = "img/grumpyBun.jpg";
    document.querySelector("#status").textContent = 'You failed!';
  } else {
    image.src = "img/happyBun.jpg";
  }
}

// print out the element that we've selected
petButton.addEventListener("click", e => {
  console.log("Button pressed!");
  petCount += 1;
  console.log(`You pet the Night Fury ${petCount} times`);

  // check if too many pets
  changeImage();
});

// initialize game
function init() {
  petCount = 0;
  gamePlaying = true;
}