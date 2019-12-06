'use strict';

let lineCount: number = 4;

// Write a program that draws a
// pyramid like this:
//
//    *
//   ***
//  *****
// *******
//
// The pyramid should have as many lines as lineCount is

var output = '';
for (var i = 0; i < lineCount; i++) {
    var space = '';
    // "removes" space each time the asteriks count is higher.
    // (value = 0; 0 < 4 - 0 - 1; 0+1)
    for (let j = 0; j < lineCount - i - 1; j++) {
        space += ' ';
    }
    // Raises asteriks by anoter 2 asteriks each line.
    // (value = 1; 1 <= 2 * 0 + 1; 1+1)
    for (var k = 1; k <= 2 * i + 1; k++) {
        output += '*';
    }
    console.log(space + output);
    output = '';
}