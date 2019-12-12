'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');
const width = 600;
const height = 400;

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Draw four different size and color rectangles.
// Avoid code duplication.

let rectWidth: number[] = [20, 40, 60, 80];
let rectHeight: number[] = [20, 40, 60, 80];
let rectColor: string[] = ['red', 'green', 'blue', 'orange'];

// function drawRect(x: number, y: number): void {
    // for (let i = 0; i < 20; i += 5) {
    //     ctx.strokeRect(25 + i * 25, 100, 100, 150)
    //     ctx.stroke();
    // }
    for (let i = 0; i < 4; i ++) {
        ctx.strokeStyle = rectColor[i];
        ctx.strokeRect(100 + i * 100, 100, rectWidth[i], rectHeight[i])
    }
// }
// drawRect(0, 0);