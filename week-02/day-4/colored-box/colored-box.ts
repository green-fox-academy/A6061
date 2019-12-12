'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d') as CanvasRenderingContext2D;
const width = 600;
const height = 400;

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// draw a box that has different colored lines on each edge.

ctx.beginPath();
ctx.strokeStyle = 'red';
ctx.moveTo(300, 300);
ctx.lineTo(300, 350);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle = 'green';
ctx.moveTo(300, 350);
ctx.lineTo(350, 350);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle = 'blue';
ctx.moveTo(350, 350);
ctx.lineTo(350, 300);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle = 'orange';
ctx.moveTo(350, 300);
ctx.lineTo(300, 300);
ctx.stroke();