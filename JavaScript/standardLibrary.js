//Looking at Sets

let onePrime = new Set([2, 3, 5, 7]);
onePrime.has(3);

console.log("t: ", onePrime);

let sumAll = 0;
for (let p of onePrime) {
  sumAll += p;
}

console.log("p: ", sumAll);

console.log("convert to array: ", ...onePrime);
console.log("max: ", Math.max(...onePrime));

// The forEach() if an array passes array indexes as te second argument to The
// Function you specify.
// Sets don't have indexes
// The Map Class
// Wehn you working with map you will be dealing with 2 arguments key and value

let m = new Map();
let n = new Map([
  ["one", 1],
  ["two", 2],
  ["three", 3],
]);

// The optional argument to the Map() constructor should be an iterable
// object that yields two element [key, value] arrays.

let copy = new Map(n);

let o = { x: 1, y: 2 };
let p = new Map(Object.entries(o));

console.log("m: ", m);
console.log("n :", n.size);
console.log("new: ", n);
console.log("copy: ", copy);
console.log("p: ", p);
