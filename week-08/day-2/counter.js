'use strict';

const button = document.querySelector('button');

const countIt = () => {
  let element = document.querySelectorAll('li');
  document.querySelector('.result').innerHTML = element.length;
};

button.addEventListener('click', countIt);