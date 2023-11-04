// * Напиши скрипт управління формою логіна.

// * Обробка відправлення форми form.login-form повинна відбуватися відповідно до події submit.
// * Під час відправлення форми сторінка не повинна перезавантажуватися.
// * Якщо у формі є незаповнені поля, виводь alert з попередженням про те, що всі поля повинні бути заповнені.
// * Якщо користувач заповнив усі поля і відправив форму, збери значення полів в об'єкт, де ім'я поля буде ім'ям властивості, а значення поля - значенням властивості. Для доступу до елементів форми використовуй властивість elements.
// * Виведи об'єкт із введеними даними в консоль і очисти значення полів форми методом reset.


const form = document.querySelector(".login-form")

form.addEventListener("submit", (event) => {
    event.preventDefault();
    const formData = new FormData(form);
    const resultFormObject = {} // об'єкт в якому будуть зберігатись дані форми
    formData.forEach((value, key) => {
      resultFormObject[key] = value;
    })

    if(!resultFormObject || !resultFormObject.password) {
      alert ("Будь ласка, внесіть дані у всі поля форми.")
      return;
    }
    console.log("Введені дані:", resultFormObject);

    form.reset();
  });







