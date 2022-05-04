
const inputRef = document.querySelector('#validation-input');

const onInputChange = () => {

    if(Number(inputRef.getAttribute('data-length')) !== inputRef.value.length) {
    inputRef.classList.remove('valid');
    inputRef.classList.add('invalid');
    }

else {
    inputRef.classList.remove('invalid');
    inputRef.classList.add('valid');
    
}
}

inputRef.addEventListener('change', onInputChange);