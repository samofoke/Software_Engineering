//Looking at the JS Library.
//Some data types such as numbers, strings, objects, arrays are
//fundamental we can consider them to be part of the language itself.

//Sets and Maps

//A set is a collection of values, like an array is. Unlike Arrays, sets
//are not ordered or indexed, and they do not allow duplicates.

let s = new Set();
//let t = new Set([1, s]); // a new set with two numbers.

let t = new Set(s);

console.log("a set: ", t);

let unique = new Set("sabata");

console.log("an unique set: ", unique);

// You can add, delete and clear in Sets, and a set cannot contain duplicates.
// When dealing with Sets and you want to create an Array it adds that Array as
// one element
// example

let bulk = new Set();
bulk.add(1, 2, 3, 4, 5);
console.log("bulk: ", bulk);
bulk.add(1);
console.log("test: ", bulk);
