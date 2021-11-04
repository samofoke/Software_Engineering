//we look at the syntax in JS
//
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

