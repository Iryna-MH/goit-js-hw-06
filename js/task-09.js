
// Напиши скрипт, который изменяет цвета фона элемента <body> через инлайн стиль 
// при клике на button.change-color и выводит значение цвета в span.color.

// <div class="widget">
//   <p>Background color: <span class="color">-</span></p>
//   <button type="button" class="change-color">Change color</button>
// </div>
// Для генерации случайного цвета используй функцию getRandomHexColor.

// function getRandomHexColor() {
//   return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
// }

// widget - an application, or a component of an interface, that enables a user to perform 
// a function or access a service.

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const changeColorBtnRef = document.querySelector('.change-color');
const spanElementRef = document.querySelector('.color');
const bodyElementRef = document.querySelector('body')

console.log(changeColorBtnRef);
console.log(spanElementRef);
console.log(bodyElementRef);

const randomColorChange = () => {
bodyElementRef.style.backgroundColor = getRandomHexColor();

spanElementRef.textContent = getRandomHexColor();

}

changeColorBtnRef.addEventListener('click', randomColorChange); 


