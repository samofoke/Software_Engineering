/* Objects are the most fundamental datatypes in JavaScript
 * An object is a composite value: it aggregates multiple values
 * and it allows you to store and retrieve those values by name.
 * page 250
 * We can say that objects map strings to values. for example hash
 * tables.
 * The methods of an object are typically inherited properties.
 * Any value in JavaScript that is not a string, a number, a Symbol, or
 * true, false, null, or undefined is an object.
 * all properties of the objects you create are writable, enumerable,
 * and configurable.
 * The is an Object.create() function
 *
 * * Object Literals
 * an object literal is a comma- separated list of colon-separated name:value 
 * pairs, enclosed within curly braces.
 */

/* Examples for Object Literals
 * page253
 */

let empty = {};

console.log(empty);

let point = {x: 0, y: 1}

console.log(point);

let point2 = {x: point.x, y: point.y, z: point.y + 1}

console.log(point2);

