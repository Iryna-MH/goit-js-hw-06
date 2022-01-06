const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const refIngredients = document.querySelector('#ingredients');

const array = ingredients.map((el, index, arr) => {

const elemIngredients = document.createElement('li');
elemIngredients.textContent = el;
elemIngredients.classList.add('item');
return elemIngredients;

})

console.log(array);

refIngredients.append(...array); 

// map, append (не принимает массив, нужно просто расспылить как бы поэлементно ?), постaвить return