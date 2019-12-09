'use strict';
// -  Create a function called `printParams`
//    which logs to the console the input parameters
//    (can have multiple number of arguments)

// function asd(...args){
//     console.log(args);
//   }

//   asd('A',1,'B');
//   asd('C');

function func1(a, b, c) {
  console.log(arguments[0]);

  console.log(arguments[1]);

  console.log(arguments[2]);
}

func1(1, 2, 3);