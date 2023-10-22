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


// havinng a class that inherits from another class.
/*
class Span extends Range {
    constructor(start, length) {
        if (length >= 0) {
            super(start, start + length);
        } else {
            super(start + length, start)
        }
    }
}
*/

// Like function declarations, class declarations have both statements and
// expression forms. for example.

let square = function(x) {return x * x;};
square(3) // this will give us 9.

// for a class we can write.
let Square = class {constructor(x) {this.area = x * x;}};
let sampleData = new Square(3).area // this also gives us 9.
console.log("the concept: ", sampleData)

// Looking at static methods 


class Range01 {
    constructor(start, end) {
        this.start = start;
        this.end = end;
}

    static parse(s) {
        let matches = s.match(/^\((\d+)\.\.\.(\d+)\)$/);
        if (!matches) {
            throw new TypeError(`Connot parse Range from "${s}".`)
        }
        return new Range01(parseInt(matches[1]), parseInt(matches[2]))
    }
}

let staticParse = Range01.parse(`(1...10)`);

console.log("static parse example: ", staticParse);

// But if we pass the staticParse.Range01 it will give a TypeError because
// we not calling a class.

// Looking at gatters, setters, and other method forms
/* This is ann example of a generator
    *[Symbol.iterator]() {
        for (let x = Math.ceil(this.from); x <= this.to; x++) {
            yield x;
        }
    }
    */

// Public, Private and Static Fields
// In the ES6 Standard in terms of Class it only allows the creation of methods
// (including getters, setters and generators) and static methods. We also the 
// getter by just saying get.
// by writing #size = 0; this allow the declaration of this Field not be modified


// Looking at a complex class
// This class is a representation of complex numbers, it include the instances method.

class Complex {

    constructor(real, imaginary) {
        this.r = real;
        this.i = imaginary;
    }

    plus(that) {
        return new Complex(this.r + that.r, this.i + that.i)
    }
    times(that) {
        return new Complex(this.r * that.r -  this.i * that.i, this.r * that.i + this.i * that.r)
    }

    static sum(c, d) {
        return c.plus(d);
    }
    static produc(c, d) {
        return c.times(d);
    }

    get real() {
        return this.r
    }

    get imaginary() {
        return this.i
    }

    get magnitude() {
        return Math.hypot(this.r, this.i);
    }

    toString() {
        return `{${this.r}, ${this.i}}`;
    }

    equals(that) {
        return that instanceof Complex && this.r === that.r && this.i === that.i;
    }

}

Complex.ZERO = new Complex(0, 0);
Complex.ONE = new Complex(1, 0);
Complex.I = new Complex(0, 1);


let c = new Complex(2, 3);
let d = new Complex(c.i, c.r);

console.log("This is a new object in the constructor: ", c );
console.log("using the instances Fields of c: ", d);
console.log(c.plus(d).toString())

// In OOP programming, a class B can be extend or be a subclass of another class 
// which can be class A.
// Subclasses and Prototypes


function Span02(start, span) {
    if (span >= 0) {
        this.from = start;
        this.to = start + span;
    } else {
        this.to = start;
        this.from = start + span;
    }


}

// This is an example of extending a class with a subclass.

class TypeMap extends Map {

    constructor(keyType, valueType, entries) {
        if (entries) {
            for (let [k, v] of entries) {
                if (typeof k !== keyType || typeof v !== valueType) {
                    throw new TypeError(`Wrong type for entry [${k}, ${v}]`)
                }
            }
        }

        super(entries);

        this.keyType = keyType;
        this.valueType = valueType;
    }

    set(key, value) {
        if (this.keyType && typeof key !== this.keyType) {
            throw new TypeError(`${key} is not of type ${this.keyType}`)
        }
        if (this.valueType && typeof value !== this.valueType) {
            throw new TypeError(`${value} is not of type ${this.valueType}`)
        }
        return super.set(key, value);
    }
}


const printMapType = new TypeMap("string", "number", [["one", 1], ["two", 2]])

console.log("The results of: ", printMapType);

printMapType.set("three", 3);

console.log("the res: ", printMapType);




































