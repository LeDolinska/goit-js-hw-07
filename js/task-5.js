function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const changeColor = document.querySelector(".change-color");

changeColor.addEventListener("click", () => {
  const body = document.querySelector("body");
  body.style.backgroundColor = getRandomHexColor();
  const colorName = document.querySelector(".color");
  colorName.textContent = body.style.backgroundColor;
})