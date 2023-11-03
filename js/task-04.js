// * Створи змінну counterValue, в якій буде зберігатися поточне значення лічильника та ініціалізуй її значенням 0.
// * Додай слухачів кліків до кнопок, всередині яких збільшуй або зменшуй значення лічильника.
// * Оновлюй інтерфейс новим значенням змінної counterValue.


const counterValue = document.querySelector("#value");
const decrementButton = document.querySelector('[data-action="decrement"]');
const incrementButton = document.querySelector('[data-action="increment"]');

let value = 0; // Початкове значення лічильника

decrementButton.addEventListener("click", () => {
  value -= 1; // Зменшення значення на 1 при кліку на кнопку "-"
  updateCounter();
});

incrementButton.addEventListener("click", () => {
  value += 1; // Збільшення значення на 1 при кліку на кнопку "+"
  updateCounter();
});

function updateCounter() {
  counterValue.textContent = value; // Оновлення значення лічильника в інтерфейсі
}
