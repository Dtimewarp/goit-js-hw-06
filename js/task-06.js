const input = document.querySelector("#validation-input");  // * звертаємось до input з id="validation-input"
input.addEventListener("blur", () => {
    // * У функції, яка викликається при втраті фокусу, отримуємо
  const inputValue = input.value; // * значення інпуту (inputValue)
  const dataLength = Number(input.getAttribute("data-length")); // * значення атрибута data-length (dataLength).
 
// * порівняння отриманих значень і видалення/додавання класу із стилізацією
  if (inputValue.length === dataLength) {
    input.classList.remove("invalid");
    input.classList.add("valid");
  } else {
    input.classList.remove("valid");
    input.classList.add("invalid");
  }
});