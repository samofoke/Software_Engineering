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

//let square = function(x) { return x * x; };
/*The function expression can also include a name for the function.
 * A function can aslo be defined using a function Statement.
 * In ES6 a function expression can be expressed using arrow function.
 */

/*A property access expression evaluates to the value of an object property
 * or an array element.
 */

/*An example of an Object let objct ={x: 2, y: 3};
 * An example of An Array that contains an object:
 * let arr = ["a", 3, [3, 4]];
 */

/*The .identifier syntax is the simpler of the two property access options.
 * let ob = {x: 1, y: 2} if I console ob it will print out an Object but
 * if I use the .identifier like ob.x I will get the value of x which is
 * 1 in this case. for an example for an Array let arr = ["a", 3, [3, 4]];
 * arr[0] which console 'a' and arr[2][1] which results to 4.
 */

/*In JavaScript, the values null and undefined are the only two values 
 * that do not have properties. This form of property access expression
 * is sometimes called “optional chaining” because it also works for longer
 * “chained” property access expressions like this one:
 * let a = { b: null };
 * a.b = null
 * a.b?.c.d = undefined
 * a is an object, so a.b is a valid property access expression. But the
 * value of a.b is null, so a.b.c would throw a TypeError. By using?. 
 * instead of . we avoid the TypeError.
 */

/*Invocation Expressions
 * An invocation expression is JavaScript’s syntax for calling (orexecuting) 
 * a function or method. It starts with a function expression that identifies
 * the function to be called.
 */

/* Conditional Invocation
 * you can invoke a function by using ? instead of using (). If the expression
 * in the left of the parentheses is null or undefined or any other 
 * non-function, a TypeError is thrown. But with the new evaluation it wont
 * throw an error.
 */

//Then example.
function sqrt(s, log) {
    if (log) {
        log(s);
    }
    return s * s;
}

//conditional invacation syntax in 2020.
function sqrt2(v, logx) {
    logx?.(v);//this checks whether the lefthand side is null or undefined.
    //it does not verify that the value is actually a function.
    return v * v;
}

let a1 = null
let z1 = 0;

try {
    a1?.(z1++);//by using the conditional invocation expression
    //the TypeError stating that a1 is not a function at Object
    //desappear.
} catch(error) {
    console.log("Well it seems I get the: ",error);
}

console.log(z1);
//The console.log(a1) will print out a null and z1 will print out 0.

/*n.m() // Regular property access, regular invocation
 * n?.m() // Conditional property access, regular invocation
 * n.m?.() // Regular property access, conditional invocation
 */

/*Object Creation Expression
 * An object creation expression creates a new object and invokes a
 * function (called a constructor) to initialize the properties of
 * that object.
 */

/*In JavaScript, however, all numbers are floating-point, so all division 
 * operations have floating-point results: 5/2 evaluates to 2.5, not 2. 
 * Division by zero yields positive or negative infinity.
 * the modulo operator is typically used with integer operands, it 
 * also works for floating-point values.
 */

/*Equality and Inequality Operators
 * Both operators accept operands of any type, and both return true if their 
 * operands are the same and false if they are different. The === operator is 
 * known as the strict equality operator (or sometimes the identity operator),
 * and it checks whether its two operands are “identical” using a strict 
 * definition of sameness. The == operator is known as the equality operator;
 * it checks whether its two operands are “equal” using a more relaxed 
 * definition of sameness that allows type conversions.
 */




























