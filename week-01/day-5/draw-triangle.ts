'use strict';

let lineCount: number = 4;

// Write a program that draws a triangle like this:
//
// *
// **
// ***
// ****
//
// The triangle should have as many lines as lineCount is

let asteriks: string = ''

// (value; value <= 4; +1)
for (let i = 1; i <= lineCount; i++) {
    //writes *+1* each time it runs(4 total)
    asteriks = asteriks + '*'
    console.log(asteriks);
}