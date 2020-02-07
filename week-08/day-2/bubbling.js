'use strict';

// data-direction= up - down - left - right - in - out;
// background-size: 200%;
// background-position-x: 30px;
// background-position-y: 30px;
// data-action= move, zoom;

const image = document.querySelector('.img-inspector');
const nav = document.querySelector('nav');

let pic = {
  'size': 200,
  'down': 0,
  'right': 0,
};

nav.addEventListener('click', (event) => {
  if (event.target.innerText === 'Up') {
    pic.down -= 10;
    image.setAttribute('style', `background-size: ${pic.size}%; background-position: ${pic.right}px ${pic.down}px`);
  };
  if (event.target.innerText === 'Down') {
    pic.down += 10;
    image.setAttribute('style', `background-size: ${pic.size}%; background-position: ${pic.right}px ${pic.down}px`);
  };
  if (event.target.innerText === 'Left') {
    pic.right -= 10;
    image.setAttribute('style', `background-size: ${pic.size}%; background-position: ${pic.right}px ${pic.down}px`);
  };
  if (event.target.innerText === 'Right') {
    pic.right += 10;
    image.setAttribute('style', `background-size: ${pic.size}%; background-position: ${pic.right}px ${pic.down}px`);
  };
  if (event.target.innerText === 'Zoom in') {
    pic.size += 20;
    image.setAttribute('style', `background-size: ${pic.size}%; background-position: ${pic.right}px ${pic.down}px`);
  };
  if (event.target.innerText === 'Zoom out') {
    pic.size -= 20;
    image.setAttribute('style', `background-size: ${pic.size}%; background-position: ${pic.right}px ${pic.down}px`);
  };
});

// Method 2; (Not mine - just hoarding ༼ つ ◕_◕ ༽つ)

// let posX = 0;
// let posY = 0;
// let size = 1000;

// const navigation = (event) => {

//     let direction = event.target.dataset.direction;
//     let inspector = document.querySelector('.img-inspector');

//     if (direction === 'up') {
//         posY -= 10;
//         inspector.style.backgroundPositionY = posY + 'px';
//     };
//     if (direction === 'down') {
//         posY += 10;
//         inspector.style.backgroundPositionY = posY + 'px';
//     };
//     if (direction === 'left') {
//         posX -= 10;
//         inspector.style.backgroundPositionX = posX + 'px';
//     };
//     if (direction === 'right') {
//         posX += 10;
//         inspector.style.backgroundPositionX = posX + 'px';
//     };
//     if (direction === 'in') {
//         size += 20;
//         inspector.style.backgroundSize = size + 'px';
//     };
//     if (direction === 'out') {
//         size -= 20;
//         inspector.style.backgroundSize = size + 'px';
//     };
// };

// document.querySelector('nav').addEventListener('click', navigation);