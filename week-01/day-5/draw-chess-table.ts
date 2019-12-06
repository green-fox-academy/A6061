'use strict';

// Create a program that draws a chess table like this
//
// % % % %
//  % % % %
// % % % %
//  % % % %
// % % % %
//  % % % %
// % % % %
//  % % % %
//

// const size: number = 8;

// for (let j: number = 0; j < size; j++) {
//     let line: string = '';
//     for (let i: number = 0; i < size; i++) {
//         line += '%';
//     }

//     console.log(line);
// }

const size: number = 8;

for (let i: number = 0; i < size; i++) {
    let line: string = '';
    for (let j: number = 0; j < size; j++) {
        if ((i + j) % 2 !== 0) {
            line += '%';
        } else {
            line += ' ';
        }
    }
    console.log(line);
}