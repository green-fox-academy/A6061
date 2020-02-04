'use strict';

const button = document.querySelector('button');
const timeStamp = () => {
console.log(Math.round(event.timeStamp))
button.disabled = true;
};

button.addEventListener('click', timeStamp);

// document.querySelector('button').removeEventListener('click', timeStamp); // button disable
// Or?

document.querySelector('button').onclick = () => {
  console.log(Math.round(event.timeStamp)); // Date.now()

};