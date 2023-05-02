function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

//отримуємо всі необхідні елементи з DOM і записуємо їх в змінні
const input = document.querySelector("input");
const createBtn = document.querySelector("[data-create]");
const destroyBtn = document.querySelector("[data-destroy]");
const boxesDiv = document.querySelector("#boxes");

//створюємо функцію createBoxes(), яка отримує параметр amount - кількість елементів, які потрібно створити
function createBoxes(amount) {
  let boxSize = 30;
  for (let i = 0; i < amount; i += 1) {
    const box = document.createElement("div"); //створюємо кожен елемент div
    box.style.backgroundColor = getRandomHexColor(); //встановлюємо елементу div випадковий колір
    box.style.width = `${boxSize}px`; //встановлюємо елементу div ширину
    box.style.height = `${boxSize}px`; //встановлюємо елементу div висоту
    boxesDiv.append(box); //додаємо елемент div до div#boxes
    boxSize += 10; //збільшуємо розмір на 10 в обох напрямках
  }
}

function destroyBoxes() {
  boxesDiv.innerHTML = ""; //очищаємо вміст div#boxes
}

//встановлюємо обробник подій на input
input.addEventListener("input", () => {
  const amount = input.value;
  //додаємо перевірку вводу чисел і активуємо/деактивуємо кнопки
  if (amount >= 1 && amount <= 100) {
    createBtn.disabled = false;
    destroyBtn.disabled = true;
  } else {
    createBtn.disabled = true;
    destroyBtn.disabled = true;
  }
});

//встановлюємо обробник подій на createBtn
createBtn.addEventListener("click", () => {
  const amount = input.value;
  createBoxes(amount);
  createBtn.disabled = true;
  destroyBtn.disabled = false;
});

//встановлюємо обробник подій на destroyBtn
destroyBtn.addEventListener("click", () => {
  destroyBoxes();
  createBtn.disabled = false;
  destroyBtn.disabled = true;
});
