function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const boxes = document.querySelector("#boxes");

function createBoxes(amount) {
  boxes.innerHTML = ""; 
  let boxSize = 30;
  let boxElements = ''; 
  for (let count = 0; count < amount; count++) {
    boxElements += `<div style="width: ${boxSize}px; height: ${boxSize}px; background-color: ${getRandomHexColor()};"></div>`;
    boxSize += 10;
  }
  boxes.innerHTML = boxElements;
  boxes.style.backgroundColor = "#f6f6fe";
}
  

function destroyBoxes() {
  boxes.innerHTML = "";
  input.value = "";
  boxes.style.backgroundColor = "transparent";
}

const createBtn = document.querySelector('#controls button[data-create]');
const destroyBtn = document.querySelector('#controls button[data-destroy]');
const input = document.querySelector("input");

createBtn.addEventListener("click", () => {
  
  const amount = parseInt(input.value);
  if (amount >= 0 && amount <= 100) {
    createBoxes(amount);
    input.value = "";
  } else {
    alert("Please enter a number between 1 and 100")
    return;
  }
});

destroyBtn.addEventListener("click", destroyBoxes);