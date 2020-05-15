console.log("pet script running");

// select the button on our page that says 'click me'
const petButton = document.querySelector("button");
console.log(petButton);

// initializa a variable called count
let count = 0;

// print out the element that we've selected
petButton.addEventListener("click", e => {
  console.log("Button pressed!");
  count += 1;
  console.log(`You pet the Night Fury ${count} times`);
  
  // check if too many pets
  if(count > 15)
    document.getElementByID('')
});

const divstatus = document.querySelector("#status");
console.log(divstatus);
