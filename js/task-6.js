function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const createBtn = document.querySelector('button[data-create]');
const destroyBtn = document.querySelector('button[data-destroy]');
const inputAmount = document.querySelector('#inputAmount');
const boxesContainer = document.querySelector('#boxes');

function createBoxes(amount) {
  const boxes = [];
  let size = 30;

  for (let i = 0; i < amount; i++) {
    const div = document.createElement('div');
    div.style.width = `${size}px`;
    div.style.height = `${size}px`;
    div.style.backgroundColor = getRandomHexColor();
    div.style.border = '1px solid black';
    size += 10;
    boxes.push(div);
  }

  boxesContainer.append(...boxes);
}

function destroyBoxes() {
  boxesContainer.innerHTML = '';
}

createBtn.addEventListener('click', () => {
  const amount = Number(inputAmount.value);

  if (amount >= 1 && amount <= 100) {
    destroyBoxes();
    createBoxes(amount);
    inputAmount.value = '';
  } else {
    alert('Будь ласка, введіть число в межах від 1 до 100');
  }
});

destroyBtn.addEventListener('click', destroyBoxes);
