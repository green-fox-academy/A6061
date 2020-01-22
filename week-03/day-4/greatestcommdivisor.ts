'use strict';

function gcd(a: number, b: number) {
  while (b) {
    let c = b;
    b = a % b;
    a = c;
  }
  return a;
}

console.log(gcd(12, 14));
console.log(gcd(9, 3));