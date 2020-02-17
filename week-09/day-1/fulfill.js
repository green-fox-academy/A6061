/*
When writing your own code, we recommend using es6-promise polyfill, since it
aims to be strictly compliant to ES2015 without any extra features. To use
es6-promise, execute the following in a shell:

    npm install es6-promise

Then, in the main file in your app, add the following line:

    require('es6-promise');

Now you can use ES2015 promises everywhere!

## Task

Create a promise. Have it fulfilled with a value of 'FULFILLED!' in
executor after a delay of 300ms, using setTimeout.

Then, print the contents of the promise after it has been fulfilled by passing
console.log to then.

## Boilerplate

    'use strict';

    var promise = new Promise(function (fulfill, reject) {
      // Your solution here
    });

    // Your solution here
    */
   
   'use strict';

   let promise = new Promise(function (fulfill, reject) {

    setTimeout(() => fulfill('FULFILLED!'), 300);

  });

promise.then((result) => {
console.log(result);
});

/*
 'use strict';

    // Create a promise

    var promise = new Promise(function (fulfill, reject) {
      // After the timeout reaches 300ms, fulfill the promise with value
      // 'FULFILLED!'.

      setTimeout(function () {
        fulfill('FULFILLED!');
      }, 300);
    });

    // Add a handler to the promise’s fulfillment. `console.log` will be called
    // with the value passed to `fulfill`, which is `'FULFILLED!'`.
    // Note that this statement will ALWAYS be executed before `fulfill` is
    // called (we'll talk about this in depth in the lessons to come).

    promise.then(console.log);
*/