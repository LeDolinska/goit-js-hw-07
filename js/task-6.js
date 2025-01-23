function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const boxes = document.querySelector("#boxes");

function createBoxes(amount) {
  boxes.innerHTML = "";
  let boxSize = 30;
  let count = 0;
  while (count < amount) {
    const box = document.createElement("div");
    boxes.style.backgroundColor = "#f6f6fe";
    box.style.width = `${boxSize}px`;
    box.style.height = `${boxSize}px`;
    box.style.backgroundColor = getRandomHexColor();
    boxes.append(box);
    count++;
    boxSize += 10;
  }
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