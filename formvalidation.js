const name = document.getElementById('name');
const email = document.getElementById('email');

form.addEventListener('submit', e => {
    e.preventDefault(formValidation());
});

function formValidation() {
    const nameValue = name.value.trim();
    const emailValue = email.value.trim();

    if (nameValue === '') {
        setErrorFor(name, 'Digite novamente, por favor.')
    } else {
        setSucessFor(name)
    }
    
    if (emailValue === '') {
        setErrorFor(email, 'Digite novamente, por favor.')
    } else if (!isEmail(emailValue)) {
        setErrorFor(email, 'E-mail inválido.')
    } else {
        setSuccessFor(email);
    }
}

function setErrorFor (input, message) {
    const formControl = input.parentElement;
    const small = formControl.querySelector('small');
    small.innerText = message;
    formControl.className = 'formControl error'
}

function setSucessFor(input) {
    const formControl = input.parentElement;
    formControl.className = 'formControl sucess'
}

function isEmail(email) {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}