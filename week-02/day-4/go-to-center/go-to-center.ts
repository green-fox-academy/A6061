'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');
const width = 600;
const height = 400;

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Create a function that draws a single line and takes 2 parameters:
// The x and y coordinates of the line's starting point
// and draws a line from that point to the center of the canvas
// Draw at least 3 lines with that function using a loop.

function drawLine(aNum: number, bNum: number): void {
    for (let i = 0; i <= 150; i += 50) { // Mettol meddig, milyen lepesekben
        ctx.beginPath();
        ctx.moveTo(aNum + i, bNum); // 25 + (0/50/100/150), 25
        ctx.lineTo(width / 2, height / 2);
        ctx.stroke();
    }
}
drawLine(25, 25);