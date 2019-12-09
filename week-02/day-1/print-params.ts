'use strict';
// -  Create a function called `printParams`
//    which logs to the console the input parameters
//    (can have multiple number of arguments)

// function func1(a1: string, a2: string, a3: number = 5):void {
// 		console.log('Hi ' + a1 + ' class! Our mentor is ' + a2 + 'And we are ' + a3);
// 	}

// func1('');

function asd(...args){
    console.log(args);
  }
  
  asd('A',1,'B');
  asd('C');