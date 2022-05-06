
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const refs = {
 inputRef: document.querySelector('#controls>input'),
 createBtnRef: document.querySelector('#create'),
 destroyBtnRef: document.querySelector("#destroy"),
 boxesRef: document.querySelector('#boxes'),
};

const defaultBox = 30;

function createBoxes (amount) {
  // destroyBoxes();
  for( let i = 0; i < amount; i += 1 ) { 
   
    const boxMarkup  = document.createElement('div');
    const size = defaultBox + i * 10;
    const color = getRandomHexColor();
    boxMarkup.style.cssText = `width: ${size}px; height: ${size}px; background-color: ${color}; margin: 5px;`;
    refs.boxesRef.appendChild(boxMarkup);
    
  }
  }

function destroyBoxes() {

  refs.boxesRef.innerHTML = '';
  refs.inputRef.value = 0;

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
  

