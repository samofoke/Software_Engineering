//we look at the syntax in JS

const x = 1;

if (x === 1) {
    let x = 2;
    console.log("well inside the block of code", x);
}

console.log("outside the block of code (global scope)", x);

/*variables declared with let, it is legal to declare the
 * same variable multiple times with var. Also var variables 
 * have function scope instead of block scope,
 */

/* Destructuring Assignment
 * In a destructuring assignment, the value on the righthand side of 
 * the equals sign is an array or object (a “structured” value), and 
 * the lefthand side specifies one or more variable names using a syntax 
 * that mimics array and object literal syntax.
 */

let [a1, b2] = [2, 4];
/*this is saying let x = 2 and y = 4, This is an example of destructuring
 * assignment that makes it easy to work with function.
 */
function get_coordinates(a, b) {
    return([Math.sqrt(a*a+b*b), Math.atan2(b, a)]);
}

console.log(get_coordinates(2, 4));

/* convert the polar to cartesian
 */

function convertCartesian(r, tr) {
    return([r*Math.cos(tr), r*Math.sin(tr)]);
}

/*going to pass this function to get_coordinates
 */

let [r, tr] = get_coordinates(1.1, 4.4);

console.log(convertCartesian(r, tr));
/* On this line I am printing out what I ahve destructured on get_coordinates.
 */

/* Creating a loop to go through key value pairs of an object and using 
 * destructuring assignment to convert pairs of elements into an array of 
 * individual variables.
 */

let pair_variables = {x1: 3, y1: 6};
for (const [name, value] of Object.entries(pair_variables)) {
    console.log(name, value);
}

/* The is a technique that allows you to destructure an Array by using 3 dots
 * (...var)
 * example will be let [x, ...y] = [1, 2, 3, 4, 5, 6]
 * which will print out x as 1 and y as [2, 3, 4, 5, 6]
 */

let [x2, ...y2] = [2, 4, 6, 8, 10];
console.log("after destructure: ", x2);
console.log("after destructure: ", y2);



























