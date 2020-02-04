'use strict';

const button = document.querySelector('button');
const div = document.querySelector('div');

button.addEventListener('click', () => {
  setTimeout(delay, 2000);
});

function delay() {
  if (div.style.display = 'none') {
    div.style.display = 'block';
    return;
  }
  div.style.display == 'none';
};