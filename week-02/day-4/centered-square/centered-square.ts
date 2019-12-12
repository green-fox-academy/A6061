
'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');
const width = 600;
const height = 400;

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Draw a green 10x10 square to the center of the canvas.

ctx.strokeStyle = "green";
ctx.strokeRect(width / 2 - 5, height / 2 - 5, 10, 10);
ctx.stroke();