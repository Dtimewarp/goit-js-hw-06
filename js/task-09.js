// * Напиши скрипт, який змінює кольори фону елемента <body> через інлайн-стиль по кліку на button.change-color і виводить значення кольору в span.color.



const changeColorBtn = document.querySelector(".change-color");
// const body = document.querySelector("body");
const spanColor = document.querySelector(".color")

changeColorBtn.addEventListener("click", handleClick);


function handleClick(click) {
  const randomColor = getRandomHexColor(); 
  document.body.style.backgroundColor = randomColor;
  spanColor.textContent = randomColor;
  // body.style.backgroundColor =  getRandomHexColor()
  // spanColor.textContent = `${getRandomHexColor()}`;
}


function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}