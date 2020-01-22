'use strict';
// Write a function that takes a filename as string,
// then returns the number of lines the file contains.
// It should return zero if it can't open the file, and
// should not raise any error.

// const fs = require('fs');

// let fileContent = fs.readFileSync('./my-file.txt', 'utf-8');

// function take(fileName: string) {
//     const fs = require('fs');

//     try {
//         let fileContent = fs.readFileSync(fileName, 'utf-8');
//         console.log(fileContent.split('\n').length);
//     } catch (error) {
//         console.log(0);
//     }
// }
// take('./my-file.txt');


const fs = require('fs');
const encoding: string = 'UTF-8';

function counter(fileName: string) {
    try {
        let fileContent: string = fs.readFileSync(fileName, encoding);
        let lineCounter: number = 1;
        for (let i = 0; i < fileContent.length; i++) {
            if (fileContent[i] === '\n') {
                lineCounter++;
            }
        }
        console.log(lineCounter);
    } catch (error) {
        console.log(0);
    }
}

counter('mytest.txt');

// const fs = require('fs');

// let fileContent = fs.readFileSync('./my-file.txt', 'utf-8');

// function take(fileName: string) {
//     const fs = require('fs');

//     let fileContent = fs.readFileSync(fileName, 'utf-8');
//     console.log(fileContent.split('\n').length);
// }
// take('./my-file.txt');
// console.log(fileContent);

export { };