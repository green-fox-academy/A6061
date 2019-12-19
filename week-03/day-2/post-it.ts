'use strict';

// an orange with blue text: "Idea 1"
// a pink with black text: "Awesome"
// a yellow with green text: "Superb!"

class PostIt {
    backgroundColor: string;
    text: string;
    textColor: string;

    constructor(backgroundColor: string, text: string, textColor: string) {
        this.backgroundColor = backgroundColor;
        this.text = text;
        this.textColor = textColor;
    }
}

let post1 = new PostIt('Black', 'Awesome', 'Yellow');
let post2 = new PostIt('Magenta', 'Awesome', 'Green');
let post3 = new PostIt('Orange', 'Awesome', 'Black');

console.log(post1);
console.log(post2);
console.log(post3);

export {};