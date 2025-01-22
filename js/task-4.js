const loginForm = document.querySelector('.login-form');

loginForm.addEventListener('submit', e => {
    e.preventDefault();
    const userData = {};
    userData.email = e.target.elements.email.value.trim();
    userData.password = e.target.elements.password.value.trim();

    if (userData.email === '' || userData.password === '') {
        alert('All form fields must be filled in');
        return;
    }

    console.log(userData);
    
    loginForm.reset();
});

const formInputs = document.querySelectorAll('.form-input');

formInputs.forEach(input => {
  input.addEventListener('input', () => {
    if (input.value.trim() !== '') {
      input.classList.add('filled');
    } else {
      input.classList.remove('filled');
    }
  });
});