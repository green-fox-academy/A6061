'use strict';

let listA: string[] = ['Apple', 'Avocado', 'Blueberries', 'Durian', 'Lychee'];
console.log(listA);

// let listB = listA;
let listB = [...listA]
console.log(listB);

{
listA.splice(4, 0, 'Kiwi');
console.log(listA);
}