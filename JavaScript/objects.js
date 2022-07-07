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

let id_name = {
    FirstName: "Sabata",
    LastName: "Coder"
}

console.log(id_name);
console.log(id_name.FirstName);

/*An object literal is an expression that creates and initializes a new and
 * distinct object each time it is evaluated.
 * The New operator creates and initializes a new object.
 * examples
 */

let objt = new Object(); /* creating an empty object */
let d = new Date(); /* we creating a Date object displaying current time*/

console.log(objt);
console.log(d);

//page 255
/* Looking at Prototypes
 * Objects created using the new keyword and a constructor invocation use
 * the value of the prototype property of the constructor function as their
 * prototype. So the object created by
 *
 * In this example objt01 inherits x and y properties.
 */
 
let objt01 = Object.create({x: 1, y: 2});
console.log(objt01.x, objt01.y);




























