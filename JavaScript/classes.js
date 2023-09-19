//going through JavaScript Classes

// Classes in JavaScript use prototype-based inheritance: if two objects inherit
// properties 

// Focus on Classes and Prototypes

function range(from, to) {
    let r = Object.create(range.methods)

    r.from = from;
    r.to = to;

    return r;
}

range.methods = {
    includes(x) {
        return this.from <= x && x <= this.to;
    },

    *[Symbol.iterator]() {
        for (let x = Math.ceil(this.from); x <= this.to; x++) {
            yield x;
        }
    },

    toString() {
        return "(" + this.from + "..." + this.to + ")"
    }
}

let r = range(1, 3);

console.log("the res: ", r);
console.log("include: ", r.includes(2));
console.log("to string: ", r.toString());
console.log("operator: ", [...r]);


// Looking at Classes and Constructors
// A Constructor is a function designed for the initialization of newly
// created objects.

// The prototype object is a fundamental to the identity of a class.
// two objects are instances of the same class if and only if they inherit from 
// same prototype object.

console.log(range.methods.isPrototypeOf(r))

// So in this example range.methods is a prototype object.

// This is the mmodern way of writing Classes in JavaScript.

class Range {
    constructor(from, to) {
        this.from = from;
        this.to = to;
    }

    includes(x) {
        return this.from <= x && x <= this.to;
    }

    *[Symbol.iterator]() {
        for (let x = Math.ceil(this.from); x <= this.to; x++) {
            yield x;
        }
    }

    toString() {
        return `(${this.from}...${this.to})`;
    }
}

let q = new Range(1, 3)

console.log("the res: ", q);
console.log("include: ", q.includes(2));
console.log("to string: ", q.toString());
console.log("operator: ", [...q]);




































