const schedule = document.querySelector('.schedule-option');
const listDeco = document.querySelector('.list-option');

const item = document.querySelector('.item');
const clearBtn = document.querySelector('.fa-circle');
const name = document.querySelector('.name');
const remarkBtn = document.querySelector('.fa-star');

const addBtn = document.querySelector('.fa-plus');
const input = document.querySelector('.inputarea');

function onAdd() {
  const text = input.value;
  console.log(text);

  input.value = '';
  input.focus();
}

input.addEventListener('keypress', (event) => {
  if (event.key === 'Enter') {
    onAdd();
  }
});
