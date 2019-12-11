'use strict';

// Write a program that draws a
// pyramid like this:
//
//    *
//   ***
//  *****
// *******
//
// The pyramid should have as many lines as lineCount is

// for -- mi / meddig / mit(csinálni)

let lineCount: number = 4;

var output = '';
for (var i = 0; i < lineCount; i++) { // 4x történik a dolog
    var space = '';

    for (let j = 0; j < lineCount - i - 1; j++) { // (value = 0; 0 < 4 - 0 - 1; 0+1) // "removes" space each time the asteriks count is higher.
        space += ' ';
        console.log(j)
    }
    // Raises asteriks by anoter 2 asteriks each line.
    // (value = 1; 1 <= 2 * 0 + 1; 1+1)
    for (var k = 1; k <= 2 * i + 1; k++) {
        output += '*';
        console.log(k)
    }
    console.log(space + output);
    output = '';
}