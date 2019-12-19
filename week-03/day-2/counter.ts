'use strict';

// Create a Counter class 77
// which has an integer property 77
// when creating it should have a default value 0 or we can specify it when creating 77
// we can add(number) to increase the counter's value by a whole number 77
// or we can add() without parameters just increasing the counter's value by one 77
// and we can get() the current value as string 77
// also we can reset() the value to the initial value 77

class Counter {
    integer: number;
    startInteger: number;

    constructor(integer: number = 0) {
        this.integer = integer;
        this.startInteger = integer;
    }
    add(input): void {
        if (input === 0) {
            this.integer++;
        } else {
            this.integer += input;
        }
    }
    get(): string {
        return "Number: " + this.integer;
    }
    reset(): number {
        return this.integer = this.startInteger;
    }
}

let int1 = new Counter();

int1.add((9));
console.log(int1.get());
int1.reset();
int1.add((2));
console.log(int1.get());