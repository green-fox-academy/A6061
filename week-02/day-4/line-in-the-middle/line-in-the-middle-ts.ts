'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d') as CanvasRenderingContext2D;
const width = 600;
const heigth = 400;

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// draw a red horizontal line to the canvas' middle.

ctx.strokeStyle = 'red';

ctx.beginPath();
ctx.moveTo(0, heigth / 2);
ctx.lineTo(width, 200);

ctx.stroke();

// draw a green vertical line to the canvas' middle.

ctx.strokeStyle = 'green';

ctx.beginPath();
ctx.moveTo(width / 2, 0);
ctx.lineTo(width / 2, heigth);

ctx.stroke();