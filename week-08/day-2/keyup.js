'use strict';

const logKey = (event) => {
  document.querySelector('h1').innerHTML = `Last pressed key code is: ${event.keyCode} | ${event.key}`;
}

document.addEventListener('keyup', logKey);