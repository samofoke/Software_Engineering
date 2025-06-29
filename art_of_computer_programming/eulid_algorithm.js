/*
 * This the basic of going htrough algorithms
 
 *----------------------------------------------------------------

 * (Euclid’s algorithm). Given two positive integers m and n, find
 * their greatest common divisor, that is, the largest positive integer that evenly
 * divides both m and n.
 *
 * The approach I am taking with this using Typescript with an interface to focus
 * on the shape of the types, this allows us to discribe what our function take
 *
 * We going to wrok out different solution which use different techniques
 *
*/
//This is the first approach to the solution
var euclidAlgorithm1 = function (_a) {
    var m = _a.m, n = _a.n;
    for (; n !== 0;) {
        var temp = m % n;
        m = n;
        n = temp;
    }
    return m;
};
console.log(euclidAlgorithm1({ m: 200, n: 87 }));
