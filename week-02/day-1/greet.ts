'use strict';
// -  Create variable named `nameToGreet` and assign the value `Green Fox` to it
// -  Create a function called `greet` that greets it's input parameter
//     -  Greeting is printing e.g. `Greetings, dear Green Fox`
// -  Greet `nameToGreet`

// let nameToGreet: string = 'Green Fox';

// function greet(Name: string,):void {
// 		console.log('Greetings, dear ' + nameToGreet);
// 	}
// greet('Reddit');

function greetPrs(Person: string): void {
    console.log('Greetings, dear ' + Person + '!');
}

greetPrs('Green Fox');
greetPrs('Go:mbike');