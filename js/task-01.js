// Посчитает и выведет в консоль количество категорий в ul#categories, 
// то есть элементов li.item.

const categories = document.querySelectorAll('.item');
console.log(`Number of categories: ${categories.length}`);

// Для каждого элемента li.item в списке ul#categories, 
// найдет и выведет в консоль текст заголовка элемента (тега <h2>) 
// и количество элементов в категории (всех вложенных в него <li>).

const elements = document.querySelectorAll('li.item');

elements.forEach(el => {

    console.log(`Category: ${el.querySelector('h2').textContent}`);
    console.log(`Elements: ${el.querySelectorAll('li').length}`);
})

