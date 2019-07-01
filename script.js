let css = document.querySelector("h3");
let color1 = document.querySelector(".color1");
let color2 = document.querySelector(".color2");
let body = document.getElementById("gradient");
let randomButton = document.querySelector(".randomButton");

function displayNewBackground() {
  body.style.background =
  "linear-gradient(to right, " + color1.value + "," + color2.value + ")";
  css.textContent = body.style.background + ";";
}


function chooseRandomColors () {
  color1.value = '#'+Math.floor(Math.random()*16777215).toString(16);
  color2.value = '#'+Math.floor(Math.random()*16777215).toString(16);
  displayNewBackground();
};


// MAIN CODE
// *********

chooseRandomColors();
color1.addEventListener("input", displayNewBackground);
color2.addEventListener("input", displayNewBackground);
randomButton.addEventListener("click", chooseRandomColors);
