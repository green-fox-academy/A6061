'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');
const width = 600;
const height = 400;

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Create a function that draws one square and takes 1 parameters:
// The square size
// and draws a square of that size to the center of the canvas.
// Draw 3 squares with that function.
// Avoid code duplication.

function drawSquare(x: number, y: number): void {
    // for (let i = 0; i < 3; i++) {
        ctx.strokeRect(width / 2 - x / 2, height / 2 - y / 2, x, y)
        // ctx.moveTo(0,0);
    // }
}
drawSquare(250, 250);