'use strict';

let lineCount: number = 7;

// Write a program that draws a
// diamond like this:
//
//    *
//   ***
//  *****
// *******
//  *****
//   ***
//    *
//
// The diamond should have as many lines as lineCount is

var output = '';
for (var i = 0; i < lineCount; i++) {
    var space = '';

    for (let j = 0; j < lineCount / 2 - i - 1; j++) {
        space += ' ';
    }

    for (var k = 1; k <= 2 * i + 1; k++) {
        output += '*';
    }
    console.log(space + output);
    output = '';
}