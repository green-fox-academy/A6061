'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');
const width = 600;
const height = 400;

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Create a function that draws a single line and takes 2 parameters:
// the x and y coordinates of the line's starting point
// and draws a 50 long horizontal line from that point.
// Draw at least 3 lines with that function using a loop.

function drawLine(x: number, y: number): void {
    for (let i = 0; i <= 66; i += 22) { // Mettol meddig, milyen lepesekben
        ctx.beginPath();
        ctx.moveTo(x, y + i);
        ctx.lineTo(50, y + i);
        ctx.stroke();
    }
}
drawLine(500, 100);