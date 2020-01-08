'use strict';

const values: any[] = [2, 3, 4, 5, 6, 7, 8, 9, 'T', 'J', 'Q', 'K', 'A']
const suits: any[] = ['C', 'D', 'H', 'S']

const valuesObject: object = {
  2: 2,
  3: 3,
  4: 4,
  5: 5,
  6: 6,
  7: 7,
  8: 8,
  9: 9,
  T: 10,
  J: 11,
  Q: 12,
  K: 13,
  A: 14
}

function randomValue(): number {
  return Math.floor(Math.random() * 13 + 1);
}

function randomSuit(): number {
  return Math.floor(Math.random() * 4 + 1);
}

function card(): any[] {
  return [values[randomValue() - 1], suits[randomSuit() - 1]];
}

class Player {
  name: string;
  card1: any[];
  card2: any[];
  card3: any[];
  card4: any[];
  card5: any[];

  constructor(name1: string) {
    this.name = name1;
    this.card1 = card();
    this.card2 = card();
    this.card3 = card();
    this.card4 = card();
    this.card5 = card();
  }
}

let player1 = new Player('White');
let player2 = new Player('Black');

console.log(player1);
console.log(player2);