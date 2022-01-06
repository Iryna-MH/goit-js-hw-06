
const inputRef = document.querySelector('#name-input');
const spanRef = document.querySelector('#name-output');

const greeting = "Anonymous";

const onInputChange = (e) => {
if (e.target.value.length === 0) {
    spanRef.textContent = greeting
}
else {
    spanRef.textContent = e.target.value
}
};

inputRef.addEventListener('input', onInputChange);