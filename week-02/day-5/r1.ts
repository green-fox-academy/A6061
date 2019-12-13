'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');
const width = 600;
const height = 600;

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Create a function that draws a single line and takes 2 parameters:
// The x and y coordinates of the line's starting point
// and draws a line from that point to the center of the canvas
// Draw at least 3 lines with that function using a loop.

ctx.strokeStyle = 'purple';
function drawLine1(y: number, x: number): void {
    for (let i = 0; i <= 600; i += height / 12) {
        ctx.beginPath();
        ctx.moveTo(y + i, x);
        ctx.lineTo(width, i + height / 12);
        ctx.stroke();
    }
}
drawLine1(0, 0);

ctx.strokeStyle = 'green';
function drawLine2(y: number, x: number): void {
    for (let i = 0; i <= 600; i += height / 12) {
        ctx.beginPath();
        ctx.moveTo(y, x + i);
        ctx.lineTo(i + width / 12, height);
        ctx.stroke();
    }
}
drawLine2(0, 0);