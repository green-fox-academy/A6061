// Compare the following code, written in the more traditional idiom of
// asynchronous callbacks, with no error handling:

//     Parse.User.logIn('user', 'pass', {
//       success: function (user) {
//         query.find({
//           success: function (results) {
//             results[0].save({ key: value }, {
//               success: function (result) {
//                 // the object was saved
//               }
//             });
//           }
//         });
//       }
//     });

// And the much more elegant Promise workflow, with first-class error handling:

//     Parse.User.logIn('user', 'pass').then(function (user) {
//       return query.find();
//     }).then(function (results) {
//       return results[0].save({ key: value });
//     }).then(function (result) {
//       // the object was saved
//     }).catch(function (err) {
//       // an error happened somewhere in the process
//     });

// Promises make writing performant, asynchronous code much easier and more fun.

// For this first lesson, let’s review what we already know about asynchronous
// operations in JavaScript.

// Using setTimeout, print the string 'TIMED OUT!' after 300ms.

// setTimeout(() => console.log('TIMED OUT!'), 300);

// -- -- --

// Set a timeout of 300ms

'use strict';

setTimeout(function () {
  // After 300ms has elapsed, print out 'TIMED OUT!'

  console.log('TIMED OUT!');
}, 300);
