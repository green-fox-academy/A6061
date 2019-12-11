'use strict';
// Create a function that takes a number
// divides ten with it,
// and prints the result.
// It should print 'fail' if the parameter is 0

let myNumber: number = 0;

// if (myNumber === 0) {
//     throw Error('Fail');
// }

// function AFunc(input: number): number {
//     let a: number = 10 / myNumber;
//     return a;
// }
// console.log(AFunc(myNumber));

// try it later with try/catch

function divide(myNumber: number) {
    if (myNumber === 0) {
        throw Error('Fail');
    } else {
        console.log(10 / myNumber);
    }
}
try {
    divide(0);
} catch (e) {
    console.log('Fail');
}