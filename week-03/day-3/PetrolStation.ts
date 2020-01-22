'use strict';

import { Car } from './Car'

class PetrolStation {
    gasAmount: number;

    constructor(gasAmm: number) {
        this.gasAmount = gasAmm;
    }
    refill(car: Car): void {
        this.gasAmount = this.gasAmount - car.capacity;
    }
}

let XRZ = new Car();
let myStation = new PetrolStation(150);
console.log(myStation.gasAmount);

export { PetrolStation };