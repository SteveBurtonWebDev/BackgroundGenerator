
const displayNewBackground = () => {
  body.style.background =
  `linear-gradient(to ${direction[currentDirection]}, ${color1.value}, ${color2.value})`;
  css.textContent = body.style.background + ";";
}


const chooseRandomColors = () => {
  color1.value = '#'+Math.floor(Math.random()*16777215).toString(16);
  color2.value = '#'+Math.floor(Math.random()*16777215).toString(16);
  displayNewBackground();
};

const rotateGradient = () => {
  currentDirection ++;
  if(currentDirection === 4) {
    currentDirection = 0;
  }
  displayNewBackground();
}

// MAIN CODE
// *********
const css = document.querySelector("h3");
const color1 = document.querySelector(".color1");
const color2 = document.querySelector(".color2");
const body = document.getElementById("gradient");
const randomButton = document.querySelector(".randomButton");
const rotateButton = document.querySelector(".rotateButton");
const direction = ['top', 'right', 'bottom', 'left'];
let currentDirection = 1;

chooseRandomColors();
color1.addEventListener("input", displayNewBackground);
color2.addEventListener("input", displayNewBackground);
randomButton.addEventListener("click", chooseRandomColors);
rotateButton.addEventListener("click", rotateGradient);
