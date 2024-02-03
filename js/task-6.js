function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const boxes = document.querySelector('#boxes');
const number = document.querySelector('input[type="number"]');
const createBtn = document.querySelector('button[data-create]');
const destroyBtn = document.querySelector('button[data-destroy]');

createBtn.addEventListener('click', () => {
  if (isValidNumber(number.value)) {
    createBoxes(number.value);
  }
})

destroyBtn.addEventListener('click', destroyBoxes);

function isValidNumber(amount) {
  return amount >= Number.parseInt(number.min) && amount <= Number.parseInt(number.max);
}

function createBoxes(amount) {
  destroyBoxes();
  let color = '';
  let arrayBox = '';
  let boxSize = 30;

  for (let i = 0; i < Number.parseInt(amount); i++) {
    color = getRandomHexColor();
    arrayBox += `<div style="width:${boxSize + 10 * i}px; height:${boxSize + 10 * i}px; background-color: ${color}"></div>`;
  }
  boxes.insertAdjacentHTML("beforeend", arrayBox);
}

function destroyBoxes() {
  boxes.innerHTML = '';
  number.value = '';
}