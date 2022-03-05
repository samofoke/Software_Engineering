/*Statements are JavaScript sentences or commands
 */

/*Conditionals
 * They're like an if or switch statements the JS interpreter execute.
 * -> Loops 
 *  Statements such as a while and a for.
 *  -> Jumps
 *  Statements like break, return, and throw that cause the interpreter to 
 *  jump.
 */

/*The primtive statements withing the block end in semicolons, but the block it
 * self does not.
 * {
 *      console.log("cos = ", x);
 * }
 */
/*Looking at the realistic example for switch statement
 * 
 * function pass(x) {
    switch(typeof x) {
        case "number":
            return x.toString(10);
        case "string":
            return "''" + x + "''";
        default:
            return String(x);
        }
    }
    console.log(pass(5));
    *
    * for a switch statement to match a case it is safe to use === identity
    * operator to avoid any type conversion.
    */
/* A deep look into loops
 * JavaScript has 5 looping statements 
 * while, do/while, for, for/of(this for await concept) and for/in.
 * The common use of loops is to iterate over the elements of an Array.\
 */
/*Loops
 *
 * while
 * the Syntax
 * while(expression){
 *  statement
 * }
 * firstly we evualte the expression, and check if the expression is truthy or
 * falsy and if it is true we execute the statement but if it false we skip the
 * block.
 * an example
 */

/*
let c = 0;
while (c < 4) {
    console.log(c);
    c++;
}
*/

/*In this case the expression is true as c < 4 until the expression becomes
 * false and the block of code stops from running.
 */

//A do/while loop sample

let a = [2, 4, 6, 10, 12, 14, 16];

function printArray(arr) {
    
    let len = arr.length;
    let x =0;
    if (len === 0) {
        console.log("The Array is empty.");
    }else {
        do {
            console.log(arr[x]);
        }while (++x < len);
    }
}


const outPut = printArray(a);

console.log(outPut);
//lesson ended on page 212
//An example of a for loop:
/* for(init; test; increment){
 *  statement
 * }
 *
 * example of a while vs a for loop
 *
 * init;
 * while(test) {
 *  statement;
 *  increment;
 * }
 * */

for(let c = 0; c <= 5; c++) {
    console.log(c);
}

/* This example we extending the for loop
 */
function com_loop() {
    let x, y;
    let s = 0;

    for(x = 0, y = 4; x <= 4; x++, y--) {
        console.log("my x is: ", x);
        console.log("my y is: ", y);
        s += x * y;
    }
    console.log("The sum is: ", s);
}

console.log(com_loop());
/* runing console inside the for loop is to virtualize the behaviour of x 
 * and y values.
 * page 215
 *
 * looking at an example of a for loop in linked list data structure and return
 * last object in the list.
 *
 * function tail(x) {
 *      for(; x.next; x = x.next);
 *      return x
 * }
 */

/* looking into for/of, This is a new kind for loop and this for loop works with
 * iterable objects for example arrays, strings, sets and maps. They represent
 * a squence or set of elements that you can loop through.
 */

function forOfLoop() {
    let data = [1, 2, 3, 4, 5];
    let sum = 0;
    for(let element of data) {
        console.log("print each element: ", element);
        sum = sum + element;
    }
    console.log("The sum of the elements", sum);
}

forOfLoop();

/*Objects are not (by default) iterable and in so doing so you get a TypeError
 * during runtime.
 * An example.
 */

function oberror() {
    let errLoop = {x: 1, y: 2, z: 3};
    for(let element of errLoop) {
        console.log("My iterable: ", element);
    }
}
/* with this function oberror we get a runtime error because the object is not
 * iterable.
 * You can iterate through the properties of an object with Object.keys() method.
 * if you want values you can just say Object.values().
 */

function abkeys() {
    let ob = {x: 1, y: 2, z: 3};
    let k = "";
    for(let i of Object.keys(ob)) {//Object.values();
        k = k + i;//k += i;
    }
    console.log("The output of keys: ", k);
}

abkeys();



























