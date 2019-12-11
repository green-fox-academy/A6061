'use strict';

let lineCount: number = 6;

// Write a program that draws a square like this:
//
// %%%%%%
// %    %
// %    %
// %    %
// %    %
// %%%%%%
//
// The square should have as many lines as lineCount is

for (let i: number = 0; i < lineCount; i++) {
    let line: string = '';
    for (let j: number = 0; j < lineCount; j++) {
        if ((i + j) % 2 !== 0) {
            line += '%';
        } else {
            line += ' ';
        }
    }
    console.log(line);
}