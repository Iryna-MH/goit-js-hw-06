
const inputRef = document.querySelector('#font-size-control');
const textRef = document.querySelector('#text');

// textRef.style.fontSize = '15px';

const textSizeChange = (e)=>{
textRef.style.fontSize = `${e.target.value}px`;
}

inputRef.addEventListener('input', textSizeChange);



// fontSize contains string data type (use string interpolation to assign a value)
