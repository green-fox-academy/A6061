'use strict';

// Write a program that calculates the sum and the average from 1 to a given number.
// Example input: 5
// Example output: Sum: 15, Average: 3

let number: number = 6;
let sum: number = 0;

// FOR mi - meddig - mit
for (let i: number = 0; i <= number; i++) {
    sum += i;
}

console.log('Sum:',sum);

console.log('Avrg:',sum / number);