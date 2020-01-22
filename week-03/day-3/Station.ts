'use strict';

import { Car } from './Car'

class Station {
    gasAmount: number;

    constructor(amount: number) {
        // if (amount) 
        // {
        this.gasAmount = amount;
        // }
    }
    refill(car: Car): void { // Specified as car from Class Car --- so car = Car. xx
        this.gasAmount = this.gasAmount - car.capacity; // car.capacity << capacity of the car from Car.ts == Actual gasAmount from station 600 - 100 fuel.
    }
}

let Ford = new Car(); // Creates new car with the given parameters, etc from class Car (Car.ts).
let VW = new Car(); // Creates new car with the given parameters, etc from class Car (Car.ts).
let myStation = new Station(600); // Changes the gasAmount to 600 in the Station class.

console.log('B4 filling cars (Full-station): ' + myStation.gasAmount); // Current amount of the Station == 600.
myStation.refill(Ford);  // Calls in the car with -refill- == 500.
console.log('After filling Ford: ' + myStation.gasAmount);
myStation.refill(VW); // Calls in the car with -refill- == 400.
console.log('After filling VW: ' + myStation.gasAmount);

// export { Station };
export { };