'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');
const width = 600;
const height = 400;

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Create a function that draws one square and takes 2 parameters:
// The x and y coordinates of the square's top left corner
// and draws a 50x50 square from that point.
// Draw 3 squares with that function.
// Avoid code duplication.

function drawSquare(x: number, y: number): void {
    for (let i = 0; i < 3; i++) {
        ctx.strokeRect(x, y, 50, 50)
        ctx.moveTo(50,50);
    }
}
drawSquare(100, 100);

// function drawLine(x: number, y: number): void {
//     for (let i = 0; i <= 66; i += 22) { // Mettol meddig, milyen lepesekben
//         ctx.beginPath();
//         ctx.moveTo(x, y + i);
//         ctx.lineTo(50, y + i);
//         ctx.stroke();
//     }
// }
// drawLine(300, 150);