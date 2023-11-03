// ? формуємо елементти за ID=categories
const categoriesList = document.querySelector('#categories');
// console.log(categoriesList);
// ? із списку категорій вибираємо елементи з класом item і виводимо їх кількість
const categoryItems = categoriesList.querySelectorAll('.item');
// console.log(categoryItems);
console.log(`Number of categories: ${categoryItems.length}`);

// ? перебираємо масив елементів categoryItems з класом item, знаходимо в ньому елемент з тегом h2 і формуємо текстовий контент цьбого елемента
categoryItems.forEach(categoryItem => {
const categoryName = categoryItem.querySelector('h2').textContent;
// console.log(categoryName);
// ? знаходимо всі елементи масиву що вкладені у ul і виводимо їх кількість
const categoryElements = categoryItem.querySelectorAll('ul li'); 
// console.log(categoryElements);
console.log(`Category: ${categoryName}`);
console.log(`Elements: ${categoryElements.length}`);
});




