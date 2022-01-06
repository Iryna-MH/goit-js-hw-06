// Напиши скрипт управления формой логина.

// <form class="login-form">
//   <label>
//     Email
//     <input type="email" name="email" />
//   </label>
//   <label>
//     Password
//     <input type="password" name="password" />
//   </label>
//   <button type="submit">Login</button>
// </form>
// Обработка отправки формы form.login-form должна быть по событию submit.
// При отправке формы страница не должна перезагружаться.
// Если в форме есть незаполненные поля, выводи alert с предупреждением о том, что все поля должны быть заполнены.
// Если пользователь заполнил все поля и отправил форму, собери значения полей в обьект, где имя поля будет именем свойства, а значение поля - значением свойства. Для доступа к элементам формы используй свойство elements.
// Выведи обьект с введенными данными в консоль и очисти значения полей формы методом reset.

const loginFormRef = document.querySelector('.login-form');
const emailInputRef = document.querySelector('[name="email"]');
const passwordInputRef = document.querySelector('[name="password"]');

console.dir(loginFormRef);
console.dir(emailInputRef);
console.dir(passwordInputRef);

const userObject = {};

const manageLoginForm = (e)=> {
e.preventDefolt

if( emailInputRef || passwordInputRef === ''){
    window.alert('Please fill in empty fields')
}
else {
userObject.key = loginFormRef.elements.name;
userObject.value = loginFormRef.elements.value;
console.log(userObject);
loginFormRef.reset();
}
}


loginFormRef.addEventListener('submit', manageLoginForm);

// reset() method restores a form element's default values. 
// This method does the same thing as clicking the form's reset button. 
// If a form control (such as a reset button) has a name or id of reset 
// it will mask the form's reset method. It does not reset other attributes 
// in the input, such as disabled .