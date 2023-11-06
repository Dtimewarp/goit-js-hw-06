const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const ingredientsList = document.querySelector("#ingredients"); 


// ingredients.forEach(ingredient => {
//   const elemOfIngridients = document.createElement("li");
//   elemOfIngridients.textContent = ingredient;
//   elemOfIngridients.classList.add('item');
//   ingredientsList.appendChild(elemOfIngridients);
// })


const elemOfIngridients = ingredients.map((ingredient) => {
  return `<li class="item">${ingredient}</li>`;
});

ingredientsList.insertAdjacentHTML("beforeend", elemOfIngridients.join(""));
console.log(elemOfIngridients);