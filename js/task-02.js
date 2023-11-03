const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const ingredientsList = document.getElementById('ingredients'); 

ingredients.forEach(ingredient => {
  const elemOfIngridients = document.createElement("li");
  elemOfIngridients.textContent = ingredient;
  elemOfIngridients.classList.add('item');
  ingredientsList.appendChild(elemOfIngridients)

})