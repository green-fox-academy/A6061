'use strict';

abstract class Animal {
  name: string;
  age: number;
  gender: string;

  constructor(name: string, age: number = 0, gender: string = '') {
    this.name = name;
    this.age = age;
    this.gender = gender;
  }
  getName() {
    return this.name;
  }
  breed() {
  }
}

class Mammal extends Animal {
  constructor(name: string) {
    super(name);
  }
  breed(): string {
    return 'pushing miniature versions out.';
  }
}

class Bird extends Animal {
  constructor(name: string) {
    super(name);
  }
  breed(): string {
    return 'laying eggs.';
  }
}

class Reptile extends Animal {
  constructor(name: string) {
    super(name);
  }
  breed(): string {
    return 'laying eggs.';
  }
}


const reptile = new Reptile('Crocodile');
const mammal = new Mammal('Koala');
const bird = new Bird('Parrot');

console.log('How do you breed?');
console.log(`A ${reptile.getName()} is breeding by ${reptile.breed()}`);
console.log(`A ${mammal.getName()} is breeding by ${mammal.breed()}`);
console.log(`A ${bird.getName()} is breeding by ${bird.breed()}`);