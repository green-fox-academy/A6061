'use strict';

function exponential(n: number) {
  // console.log(n);
  if (n === 1) {
    return n;
  }
  return exponential(n - 1) + n;
}

console.log(exponential(5));