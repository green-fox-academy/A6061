'use strict';

// Write a program that prints the numbers from 1 to 100.
// But for multiples of three print “Fizz” instead of the number
// and for the multiples of five print “Buzz”.
// For numbers which are multiples of both three and five print “FizzBuzz”.

for (let i: number = 1; i <= 100; i++) {
    //  number -div 3. & 15. (15) maradektalanul
    if (i % 15 == 0) {
        console.log("FizzBuzz");
    }
    // number -div 3. 0 maradektalanul
    else if (i % 3 == 0) {
        console.log('Fizz');
    }
    // number -div 5. 0 maradektalanul
    else if (i % 5 == 0) {
        console.log("Buzz");
    }

    // number -div 3. & 5. maradektalanul (Tulkomplikalt pelda)
    // else if ((i % 3 != 0) && (i % 5 != 0)) {
    //     console.log(i);
    // }

    // elozoekben felsoroltak eseten kiiratas
    else {
        console.log(i);
    }
}