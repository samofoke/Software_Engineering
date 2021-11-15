/*An expression is a phrase that can be evaluated to produce a value
 *
 * Primary expressions
 * The're those that stand alone and they do not include any simpler 
 * expressions.
 * - We looking at true, false, null and this.
 * But this is not a constant because it evaluates to different values
 * in different places of the program.
 * The third type of a primary expression we look at i, sum, undefined.
 */

/*When any identifier appears by itself in a program, JavaScript assumes
 * it is a variable or constant or property of the global object and looks
 * up its value.
 */

//if that value is not found it will evaluate to ReferenceError.

/*Object and Array intializers.
 * Object and array initializers are expressions whose value is a newly
 * created object or array. These initializer expressions are sometimes
 * called object literals and array literals. Unlike true literals, however,
 * they are not primary expressions, because they include a number 
 * of subexpressions that specify property and element values.
 */


let matrix = [[2, 4, 6], [8, 10, 12], [14, 16, 18]];
console.log(matrix);


let m = [[2, 4, 6,,,,,7,,,,3,], [8, 10,,,9,,, 12], [14, 16, 18]];
console.log(m);

//When printing this out you get <3 empty items> in this Array.

let xp = [1,,,,3];
let rp = [2,,4,,6,,];

console.log(xp);
console.log(rp);

//Nested Object literals example.

let ngl = {
    yx: {x: 3, y: 3},
    xy: {X: 6, y: 6}
};

console.log(ngl);

//Function definition expresssions

/*function definition expression is a “function literal” in the same way
 * that an object initializer is an “object literal.”
 */




















