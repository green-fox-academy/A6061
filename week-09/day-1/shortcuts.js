'use strict';

// The first is .catch. So far we already know how to handle the rejection of a
// promise -- through the second parameter to .then function. However,
// sometimes you only want to handle the rejection and not success. In these
// cases, since the onFulfilled callback is optional, you can specify null in
// place of it.  However, a much easier way to achieve this is to use .catch.
// Instead of having to write

//     promise.then(null, function (err) {
//       console.error('THERE IS AN ERROR!!!');
//       console.error(err.message);
//     });

// You could simply write

//     promise.catch(function (err) {
//       console.error('THERE IS AN ERROR!!!');
//       console.error(err.message);
//     });

// This notation also has the benefit of making the syntax easier to understand for
// people who do not speak Promises yet, since it is fairly obvious to everyone
// who has done JavaScript programming to understand what catch means.

// The second and third are Promise.resolve and Promise.reject. The code
// examples below will tell you exactly what they do:

//     // The way you have learned: create promise through the constructor.

//     var promise = new Promise(function (fulfill, reject) {
//       fulfill('SECRET VALUE');
//     });

//     // Introducing: Promise.resolve
//     // It does the exact same thing as above:

//     var promise = Promise.resolve('SECRET VALUE');


//     // Likewise...

//     var promise = new Promise(function (fulfill, reject) {
//       reject(new Error('SECRET VALUE'));
//     });

//     var promise = Promise.reject(new Error('SECRET VALUE'));

// ## Task

// We don’t have any specific task we’d like to assign to you for this lesson.
// Feel free to explore all three functions at your own pace. When you are
// preparing to submit though, make sure you are using at least catch and one
// of Promise.resolve and Promise.reject

/*
Promise.resolve('Success').then(function(value) {
  console.log(value); // "Success"
}, function(value) {
  // not called
});

function delayPromise() {
  return new Promise((resolve, reject) => {
    // setTimeout(() => resolve('done'), 3000);
    setTimeout(() => reject('error'), 3000);
  });
}

delayPromise()
  .then((result) => {
    console.log(result);
  })
  .catch((err) => {
    console.log(`failed: ${err}`);
  })
*/

  'use strict';

  var message;
  var promise;

  function randomBytes(n) {
    return (Math.random() * Math.pow(256, n) | 0).toString(16);
  }

  message =
    'A fatal exception ' + randomBytes(1) + ' has occurred at ' +
    randomBytes(2) + ':' + randomBytes(4) + '. Your system\nwill be ' +
    'terminated in 3 seconds.';

  promise = Promise.reject(new Error(message));

  promise.catch(function (err) {
    var i = 3;

    process.stderr.write(err.message);

    setTimeout(function boom() {
      process.stderr.write('\rwill be terminated in ' + (--i) + ' seconds.');
      if (!i) {
        process.stderr.write('\n..... . . . boom . . . .....\n');
      } else {
        setTimeout(boom, 1000);
      }
    }, 1000);
  });