"use strict";
//arrays
let names;
names = ['Syed', 'Amaan', 'Ali'];
let ages = [10, 20, 30];
names.push('hello');
ages.push(40);
console.log(names);
console.log(ages);
//type inference with arrays
let fruits = ['mango', 'apple', 'banana'];
fruits.push('peaches');
const f = fruits[2]; //f is string
let things = [1, true, 'hello'];
const t = things[2]; //t is string|boolean|number
