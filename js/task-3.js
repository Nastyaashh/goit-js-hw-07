const input = document.querySelector('#name-input');
const output = document.querySelector('#name-output');

input.addEventListener('input', () => {
  const clearValue = input.value.trim();
  output.textContent = clearValue ? clearValue : 'Anonymous';
});
