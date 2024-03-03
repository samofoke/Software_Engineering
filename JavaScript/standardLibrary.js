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

// using typed arrays
// once you have created a typed array, you can read and write it's elements.

const LargestPrimeSmaller = (n) => {
  let a = new Uint8Array(n + 1);

  let max = Math.floor(Math.sqrt(n));

  let p = 2;

  while (p <= max) {
    for (let i = 2 * p; i <= n; i += p) {
      a[i] = 1;
    }
    while (a[++p]) {}
  }
  while (a[n]) {
    n--;
  }
  return n;
};

console.log("prime: ", LargestPrimeSmaller(120));

// Typed arrays are not true arrays, but they emplement most array method.
// typed arrays have fixed lengths, so the length property is read-only,
// and methods that change the lengt:wqh of the array (such as push(), pop(),
// unshift(), shift(), and splice()) are not implemented for typed arrays.

// regular expression pattern matching is done by finding
// the first position in the string at which a match is possible. Since a
// match is possible starting at the first character of the string, shorter
// matches starting at subsequent characters are never even considered.
