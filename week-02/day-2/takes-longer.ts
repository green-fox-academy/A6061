'use strict';
// While saving this quote, a disk error has occured. Please fix it.
// Add "always takes longer than" between the words "It" and "you"

let quote: string = `Hofstadter's Law: It you expect, even when you take into account Hofstadter's Law.`;

console.log(quote);

let insert = ` always takes longer than`;
let output = [quote.slice(0, 20), insert, quote.slice(20)].join('');

console.log(output);