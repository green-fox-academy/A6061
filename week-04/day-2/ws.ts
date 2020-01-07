'use strict';

class Button {
  width: number;
  height: number;
  color: string;

  print() {
    console.log("I'm a button");
    console.log("Height: " + this.height);
    console.log("Widt " + this.width);
  }

  constructor() {
    this.height = 0;
    this.width = 0;
    this.color = '#000000';
  }

}

class TextButton extends Button {
  // width: number; << örökölt Button class-böl.
  // height: number;
  // color: string;
  text: string;

  print() {
    super.print();
    console.log(this.text);
  }
}

let button1 = new Button();

button1.height = 15;

console.log(button1.height);
button1.print();

let button2 = new TextButton();

button2.text = "Log in";
button2.height = 25;

console.log(button2.height);
button2.print();

// Button << ineritance/származik< IconButton & TextButton

// button2 = new Button
// Button << button2 & another (double utalás)

export {};