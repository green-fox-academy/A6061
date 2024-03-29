/*
# Rejecting a Promise

After the last session, you should be able to create a promise, fulfill it
with a value, and read that value after the fulfillment of the promise. Now,
not all promises result in a successful execution; some errors may have
happened in the process. That's where promise rejection comes into play.

When a promise is rejected, this is typically (though not always) used to
indicate that a value was not successfully obtained by the promise. Promises
provide a way to pass the specific error that prevents the successful
execution.

Once a promise has been rejected, it can never be fulfilled (nor rejected
again). This aspect of promises will be explored deeper in the next lesson.

## Task

Create a promise that after a delay of 300ms, rejects with an Error object.
The Error object should be constructed with parameter 'REJECTED!', which is
the textual message of the error.

Create a function onReject to print error.message using console.log. Pass
this function as a rejection handler to the then method of your promise.

## Hint

As a review from last lesson, a promise's then function takes two callbacks:
the first to be called when the promise is fulfilled and the second when the
promise is rejected.

## Boilerplate

    var promise = new Promise(function (fulfill, reject) {
      // Your solution here
    });

    function onReject (error) {
      // Your solution here
    }

    // Your solution here
    */
   
   'use strict';

   let promise = new Promise((resolve, reject) => {
    setTimeout(() => reject(new Error("REJECTED!")), 300);
  });

  function onReject (error) {
    console.log(error.message);
  };

  promise
  .then(() => console.log(result),(error) => onReject(error));

  /*
      'use strict';

    // Create a promise

    var promise = new Promise(function (fulfill, reject) {
      // After the timeout reaches 300ms, reject the promise with an `Error` object
      // with parameter `"REJECTED!"`.

      setTimeout(function () {
        reject(new Error('REJECTED!'));
      }, 300);
    });

    // Create a function to print `error.message` using `console.log`.

    function onReject(error) {
      console.log(error.message);
    }

    // Pass this function as a rejection handler to the `then` method of the
    // promise (the second parameter).

    promise.then(null, onReject);
  */