'use strict';

let currentHours: number = 14;
let currentMinutes: number = 34;
let currentSeconds: number = 42;

// Write a program that prints the remaining seconds (as an integer) from a
// day if the current time is represented by these variables

let HourPerDay: number = 24;
let MinutesPerHour: number = 60;
let SecondsPerMinutes: number = 60;

console.log(currentHours,':', currentMinutes,':', currentSeconds);
let a: number = HourPerDay - currentHours;
let b: number = MinutesPerHour - currentMinutes;
let c: number = SecondsPerMinutes - currentSeconds;
console.log(a,':', b,':', c);