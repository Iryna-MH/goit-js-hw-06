
const loginFormRef = document.querySelector('.login-form');

const manageLoginForm = (e) => {
e.preventDefault();
const {
    elements: { 
        email: {value: email},
        password: {value: password},
    }
} = e.currentTarget

if(email  === "" || password === "") {
 window.alert("Please fill in empty fields!");
}

else {
    console.log({email, password});

    e.currentTarget.reset();
};

};


loginFormRef.addEventListener('submit', manageLoginForm);


// reset() method restores a form element's default values. 
// This method does the same thing as clicking the form's reset button. 
// If a form control (such as a reset button) has a name or id of reset 
// it will mask the form's reset method. It does not reset other attributes 
// in the input, such as disabled .

// const formEl = document.querySelector('.login-form');

// formEl.addEventListener('submit', event => {
//   event.preventDefault();
//   const  email = formEl.elements.email.value;
//   const  password = formEl.elements.password.value;
//   if (email === ''|| password === '') {
//     alert('All fields should be fill out');
//   } else {
//      console.log({ email, password});
//   event.currentTarget.reset(); }
// }); 