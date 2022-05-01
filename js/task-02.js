const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const refIngredients = document.querySelector('#ingredients');

const elements = ingredients.map((el, index, arr) => {

const elemIngredients = document.createElement('li');
elemIngredients.textContent = el;
elemIngredients.classList.add('item');
return elemIngredients;

})

console.log(elements);

refIngredients.append(...elements); 

// map, append (не принимает массив, нужно просто расспылить как бы поэлементно ?), постaвить return