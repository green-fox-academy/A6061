'use strict';
// Write a function that is able to manipulate a file
// By writing your name into it as a single line
// The file should be named "my-file.txt"
// In case the program is unable to write the file,
// It should print the following error message: "Unable to write file: my-file.txt"

// const fs = require('fs');

const encoding: string = 'utf-8';
let fileContent: string = 'Adam Shepherd';

// fs.writeFileSync('my-file-1.txt', fileContent);

function take(fileContent: string) {
    const fs = require('fs');
    try {
        fs.writeFileSync('my-file-1.txt', fileContent, encoding);

    } catch (e) {
        console.log('"Unable to write file: my-file.txt"');
    }
}
take(fileContent);

/* Easybb <<<
    const encoding: string = 'utf-8';


function take(fileContent: string) {
    const fs = require('fs');
    try {
        fs.writeFileSync('my-file-1.txt', fileContent, encoding);

    } catch (e) {
        console.log('"Unable to write file: my-file.txt"');
    }
}
take('Adam'); */