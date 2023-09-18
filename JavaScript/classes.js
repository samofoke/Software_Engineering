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































