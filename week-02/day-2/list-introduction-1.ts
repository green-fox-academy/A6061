'use strict';

let obj1: string[] = [];

if (obj1.length > 0) {
    console.log('Full list');
} else {
    console.log('Empty list');
}

obj1.push('William');
console.log(obj1);

obj1.push('John');
console.log(obj1);

obj1.push('Amanda');
console.log(obj1);

// lists the name
obj1.forEach(function (ent) {
    console.log(ent);

});
// Adds list in-b4 the names list.
let i: number = 1;
obj1.forEach(
    function (ent) {
        console.log(i + '. ' + ent)
        i++;
    })
// removes the mid element of obj1
obj1.splice(1, 1);
console.log(obj1);
// reverses the order of the previous list
let reversedobj1 = obj1.reverse();
console.log(reversedobj1);
// removes every element of the obj1
obj1.splice(0);
console.log(obj1);