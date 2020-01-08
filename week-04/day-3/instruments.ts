'use strict';

abstract class Instrument {
  name: string;

  constructor(name: string) {
    this.name = name;
  }
  abstract sound(): void;

  play(): void {
  }
}

abstract class StringedInstrument extends Instrument {
  numberOfStrings: number;

  play(): void {
    console.log(this.name + ', a ' + this.numberOfStrings + '-stringed instrument that goes ' + this.sound());
  }

  abstract sound(): void;

  constructor(name: string, numberOfStrings: number) {
    super(name);
    this.numberOfStrings = numberOfStrings;
  }
}

class ElectricGuitar extends StringedInstrument {

  constructor(numberOfStrings: number = 6) {
    super('ElectricGuitar', numberOfStrings);
  }
  sound(): string {
    return 'Twang';
  }
}

class BassGuitar extends StringedInstrument {

  constructor(numberOfStrings: number = 4) {
    super('BassGuitar', numberOfStrings);
  }
  sound(): string {
    return 'Duum-duum-duum';
  }
}

class Violin extends StringedInstrument {

  constructor(numberOfStrings: number = 4) {
    super('Violin', numberOfStrings);
  }
  sound(): string {
    return 'Screech';
  }
}


console.log(
  'Test 1, create Electric Guitar, Bass Guitar and Violin with default strings.'
);
let guitar = new ElectricGuitar();
let bassGuitar = new BassGuitar();
let violin = new Violin();

console.log('Test 1 Play');
guitar.play();
bassGuitar.play();
violin.play();

console.log(
  'Test 2, create Electric Guitar, Bass Guitar with 7 and 5 strings.'
);
let guitar2 = new ElectricGuitar(7);
let bassGuitar2 = new BassGuitar(5);

console.log('Test 2 Play');
guitar2.play();
bassGuitar2.play();