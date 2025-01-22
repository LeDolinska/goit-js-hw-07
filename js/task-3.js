const input = document.querySelector('#name-input');
const output = document.querySelector('#name-output');

input.addEventListener('input', (e) => {
    if (e.currentTarget.value.trim() !== '') {
        output.textContent = e.currentTarget.value.trim();
    } else {
        output.textContent = 'Anonymous';
    }
    if (input.value.trim() !== '') {
      input.classList.add('filled');
    } else {
      input.classList.remove('filled');
  }
});


