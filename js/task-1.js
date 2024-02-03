// 1. Кількість категорій в ul#categories
const categories = document.querySelectorAll('ul#categories li.item');
const countCategories = categories.length;
console.log(`Кількість категорій в ul#categories: ${countCategories}`);
console.log('')

// 2. Текст заголовка у кожній категорії та кількість елементів у ній
categories.forEach((categorie, index) => {
  let titleCategorie = categorie.querySelector('h2').textContent;
  let countInCategorie = categorie.querySelectorAll('li').length;
  console.log(`Текст заголовка елемента №${index + 1}: ${titleCategorie}, кількість елементів у категорії: ${countInCategorie}`);
})