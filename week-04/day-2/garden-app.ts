'use strict';

class Plant {
  color: string;
  waterLvl: number;
  waterReq: number;
  waterAbsorb: number;
  type: string;

  constructor(color: string = '', waterLvl: number = 0, waterReq: number = 0, waterAbsorb: number = 0, type: string = '') {
    this.color = color;
    this.waterLvl = waterLvl;
    this.waterReq = waterReq;
    this.waterAbsorb = waterAbsorb;
    this.type = type;
  }
}

class Flower extends Plant {
  constructor(color: string = '', waterLvl: number = 0, waterReq: number = 5, waterAbsorb: number = 0.75, type: string = 'Flower') {
    super(color, waterLvl, waterReq, waterAbsorb);
    this.type = type;
  }
  waterNeed(): string {
    if (this.waterLvl < this.waterReq) {
      return 'The' + this.color + this.type + ' needs water.'
    } else {
      return 'The' + this.color + this.type + ' does not need water.'
    }
  }
}

class Tree extends Plant {
  constructor(color: string = '', waterLvl: number = 0, waterReq: number = 10, waterAbsorb: number = 0.4, type: string = 'Tree') {
    super(color, waterLvl, waterReq, waterAbsorb);
    this.type = type;
  }
  waterNeed(): string {
    if (this.waterLvl < this.waterReq) {
      return 'The' + this.color + this.type + ' needs water.'
    } else {
      return 'The' + this.color + this.type + ' does not need water.'
    }
  }
}



/*
- - - - - - - - Feladat - - - - - - - - -

The yellow Flower needs water
The blue Flower needs water
The purple Tree needs water
The orange Tree needs water

Watering with {{{{40}}}
The yellow Flower _doesnt_ need water
The blue Flower _doesnt_ need water
The purple Tree needs water
The orange Tree needs water

Watering with {{{70}}}
The yellow Flower _doesnt_ need water
The blue Flower _doesnt_ need water
The purple Tree _doesnt_ need water
The orange Tree _doesnt_ need water
*/
export {};