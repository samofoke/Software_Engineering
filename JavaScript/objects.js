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

/* Querying and setting properties
 * in this topic we have objects as associative arrays.
 * Looking at inheritance in JavaScript.
 * The fact that inheritance occurs when querying properties but no when
 * setting them is a key feature in JavaScript because it allows us to 
 * seletively override inherted properties.
 * The delete operator only deletes it's own properties, not inheried ones.
 */

let unitCircle = { r: 1 };
let c = Object.create(unitCircle);

c.x = 1; c.y = 1;

c.r = 2;

unitCircle.r 
console.log(unitCircle.r);

//an example of the delete operator

let sampl = { x: 1 }
delete sampl.x
console.log(sampl)

/* Testing properties in JavaScript
 * objects can be thought as sets of properties and it's useful to always
 * test for membership in the set.
 * this allows us to valided if a property exists in an object.
 */

let sa01 = { x: 1 }

sa01.propertyIsEnumerable("x")
console.log(sa01)



















