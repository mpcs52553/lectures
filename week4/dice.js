// This is a helpful function to generate a random number from 1 to 6
const pickRandomNumber = function() {
  return Math.floor(Math.random() * 6) + 1;
}

// Your code goes here...
document.addEventListener("DOMContentLoaded", setupListeners);

function setupListeners() {
  const e = document.querySelector("#roll_dice");
  e.addEventListener("click", rollTheDice);
}

function rollTheDice() {
  let n1 = pickRandomNumber();
  let n2 = pickRandomNumber();

  let images = document.querySelectorAll("#dice img");
  images[0].src = "images/" + n1 + ".png"
  images[1].src = "images/" + n2 + ".png"
}


