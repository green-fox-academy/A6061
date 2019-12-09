'use strict';
// -  Create a function called `factorio`
//    that returns it's input's factorial

// function factorio(num) {
//     if (num < 0) 
//           return -1;
//     else if (num == 0) 
//         return 1;
//     else {
//         return (num * factorio(num - 1));
//     }
//   }
//   console.log(factorio(4));

function factorio(until: number): number {
    let sum: number = 1;
    for (let i: number = 1; i <= until; i++) {
        sum *= i;
    }
    return sum;
}
console.log(factorio(4));