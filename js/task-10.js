// * Напиши скрипт створення і очищення колекції елементів. Користувач вводить кількість елементів в input і натискає кнопку Створити, після чого рендериться колекція. Натисненням на кнопку Очистити, колекція елементів очищається.
// * Створи функцію createBoxes(amount), яка приймає один параметр - число. Функція створює стільки <div>, скільки вказано в amount і додає їх у div#boxes. 
// *1.Розміри найпершого <div> - 30px на 30px. 
// *2. Кожен елемент після першого повинен бути ширшим і вищим від попереднього на 10px. 
// * 3. Всі елементи повинні мати випадковий колір фону у форматі HEX. Використовуй готову функцію getRandomHexColor для отримання кольору.
// * Створи функцію destroyBoxes(), яка очищає вміст div#boxes, у такий спосіб видаляючи всі створені елементи.

// Отримуємо доступ до input, двох button і контейнеру для майбутніх div
const input = document.querySelector("input");
const createButton = document.querySelector("[data-create]");
const destroyButton = document.querySelector("[data-destroy]");
const boxesContainer = document.querySelector("#boxes");
// Вішаємо слухачів на кнопки створення і видалення
createButton.addEventListener("click", createBoxes);
destroyButton.addEventListener("click", destroyBoxes);

function createBoxes() {
  const amount = Number(input.value);
  const initialSize = 30; // стартовий розмір div
  let boxesHTML = "";

  for (let i = 0; i < amount; i++) {
    const size = initialSize + i * 10;
    const color = getRandomHexColor();
    boxesHTML += `<div style="width: ${size}px; height: ${size}px; background-color: ${color};"></div>`;
  }
  // трішки стилів для гарного настрою :)
  boxesContainer.style.display = "flex"
  boxesContainer.style.flexDirection = "raw"
  boxesContainer.style.flexWrap = "wrap-reverse"
  boxesContainer.style.gap = "24px"
 // додаємо створені div на "екран"
  boxesContainer.insertAdjacentHTML("beforeend", boxesHTML); 
}
//  очищуємо "екран"
function destroyBoxes() {
  boxesContainer.innerHTML = "";
}
// функція рандомізації кольору створеного div
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}