'use strict';

// Write a program that stores 3 sides of a cuboid as variables (floats)
// The program should write the surface area and volume of the cuboid like:
//
// Surface Area: 600
// Volume: 1000

let xCuboid = 10;
let yCuboid = 10;
let zCuboid = 10;

let surfaceArea = 2 * (xCuboid * yCuboid + xCuboid * zCuboid + yCuboid * zCuboid);
console.log('Surface Area: ', surfaceArea);
let cubeVolume = xCuboid * yCuboid * zCuboid;
console.log('Volume: ', cubeVolume);