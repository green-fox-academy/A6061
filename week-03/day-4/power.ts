'use strict';

function power(powerN: number, n: number) {
  if (n === 1) {
    return powerN;
  }
  return power(powerN, n - 1) * powerN;
}

console.log(power(3, 2));