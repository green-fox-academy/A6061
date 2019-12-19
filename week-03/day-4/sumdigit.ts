'use strict';

function sumNum(n: number, sum: number = 0) {
  console.log(n);
  while (n) {
    sum += n % 10;
    n = Math.floor(n / 10);
  }
  return sum;
}

console.log(sumNum(106));

export { };

/*
found ## base code

var value = 2568,
    sum = 0;

while (value) {
    sum += value % 10;
    value = Math.floor(value / 10);
}

console.log(sum); */