console.log("pet script running");

// select the button on our page that says 'click me'
const petButton = document.querySelector("button");
console.log(petButton);

// initializa a variable called count
let count = 0;

// create function to change image
function changeImage() {
  let image = document.getElementById('image-container');
  if (count > 15) {
    image.src = grumpyBun.jpg
  } else {
    image.src = happyBun.jpg
  }
}

// print out the element that we've selected
petButton.addEventListener("click", e => {
  console.log("Button pressed!");
  count += 1;
  console.log(`You pet the Night Fury ${count} times`);
  
  // check if too many pets
  changeImage();
});

const divstatus = document.querySelector("#status");
console.log(divstatus);
