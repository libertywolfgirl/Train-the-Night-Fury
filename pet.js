console.log("pet script running")

//select the button on our page that says 'click me'
const petButton = document.querySelector ("button") 
//initializa a variable called count
let count = 0
//print out the element that we've selected
console.log(petButton)
petButton.addEventListener ('click' , (e) => {
  console.log("Button pressed!")
  count +=1 
}) 
console.log (`You pet the bunny $ {count} times`)
//const 
console.log(petButton)
// Const refers to a variable 
const divstatus = document.querySelector ("#status")
console.log(divstatus)


