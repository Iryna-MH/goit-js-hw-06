// Создай переменную counterValue в которой будет храниться текущее значение счетчика 
// и инициализируй её значением 0.
// Добавь слушатели кликов на кнопки, внутри которых увеличивай или уменьшай значение счтетчика.
// Обновляй интерфейс новым значением переменной counterValue.

// создать две стрелочные ф-ии - одна увеличивает, другая уменьшает.
// доступиться до span, перевести его в JS, функции будут его плюсовать, минусовать 
// тоесть присваивает значение в текстконтент спана
// ловим событие - будет клик

const ref = {
  counterRef: document.querySelector('#value'),
  incrementRef: document.querySelector('[data-action="increment"]'),
  decrementRef: document.querySelector('[data-action="decrement"]'),
  clearRef: document.querySelector('[data-action="clear"]'),
}

console.log(ref.counterRef);
console.log(ref.incrementRef);
console.log(ref.decrementRef);
console.log(ref.clearRef);

let counterValue = 0;

const onClickPlus = () => {
    counterValue +=1;
    ref.counterRef.textContent = counterValue;
}

const onClickMinus = () => {
    counterValue -=1; 
    ref.counterRef.textContent = counterValue;
}

const onClickClear = () => {
    counterValue = 0; 
    ref.counterRef.textContent = counterValue;
}

ref.incrementRef.addEventListener('click', onClickPlus );
ref.decrementRef.addEventListener('click', onClickMinus);
ref.clearRef.addEventListener('click', onClickClear);
