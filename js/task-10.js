
// !Напиши скрипт создания и очистки коллекции элементов. 
// Пользователь вводит количество элементов в input и нажимает кнопку Создать, 
// после чего рендерится коллекция. При нажатии на кнопку Очистить, 
// коллекция элементов очищается.


// <div id="controls">
//   <input type="number" min="1" max="100" step="1" />
//   <button type="button" data-create>Create</button>
//   <button type="button" data-destroy>Destroy</button>
// </div>

// <div id="boxes"></div>

// Создай функцию createBoxes(amount), которая принимает один параметр - число. 
// Функция создает столько <div>, сколько указано в amount и добавляет их в div#boxes.

// Размеры самого первого <div> - 30px на 30px.
// Каждый элемент после первого, должен быть шире и выше предыдущего на 10px.
// Все элементы должены иметь случайный цвет фона в формате HEX. 
// Используй готовую функцию getRandomHexColor для получения цвета.
// function getRandomHexColor() {
//   return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
// }
// Создай функцию destroyBoxes(), которая очищает содержимое div#boxes, 
// тем самым удаляя все созданные элементы.

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const refs = {
 inputRef: document.querySelector('#controls>input'),
 createBtnRef: document.querySelector('#create'),
 destroyBtnRef: document.querySelector("#destroy"),
 boxesRef: document.querySelector('#boxes'),
};
console.log(refs.inputRef);
console.log(refs.createBtnRef);
console.log(refs.destroyBtnRef);
console.log(refs.boxesRef);

const defaultBox = 30;

function createBoxes (amount) {
  destroyBoxes();
  for( let i = 0; i < amount; i += 1 ) { 
   
    const boxMarkup  = document.createElement('div');
    console.log(boxMarkup);
    const size = defaultBox + i * 10;
    const color = getRandomHexColor();
    boxMarkup.style.cssText = `width: ${size}px; height: ${size}px; background-color: ${color}; margin: 5px;`;
    refs.boxesRef.appendChild(boxMarkup);
    
  }
  }

function destroyBoxes() {

  refs.boxesRef.innerHTML = '';

};

refs.createBtnRef.addEventListener('click', () => { 
  const number = Number(refs.inputRef.value);
  createBoxes(number);
});

refs.destroyBtnRef.addEventListener('click', destroyBoxes);




//! если бы создали полностью разметку, то использовали б element.insertAdjacentHTML;
// если добавляем cssText  - позволяет вставлять стили в ДОМ в таком же формате (в виде CSS, напр. display: flex)
// то есть так, как это делаем в СSS, напр  backgroundColor, background-color.
// refs.createBtnRef.addEventListener('click', () => createBoxes(Number(refs.inputRef.value)));
// исп нулевой элемент (i = 0) чтобы сохранить дефолтный размер 30 на первой итерации
  