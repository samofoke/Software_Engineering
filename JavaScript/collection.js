let books = {
    //this is a json object wich allows one to access
    //the contents inside.
    topic: "lord of the flies",

    author: "Helmet"
};

books.topic
books["year"]
books.price = 100;

console.log(books.topic);
console.log(books);


//looking at numbers.
let p = [2, 4, 6, 8, 10];
console.log(p.length);
console.log(p.length - 1);

//looking at an array with 2 elements.
let cd = [
    {s: 3, a: 3},
    {s: 2, a: 2}
];

console.log(cd[0].s + cd[1].a);

function myNum(x) {
    return x * 2;
}

let s = 3;
console.log(myNum(s));

//we look at simple examples of Javascript function.

function sumNumber(x){
    return x + 2;
}

let sq = function(x) {
    return x * x;
}

console.log("This is just an example for functions...");

console.log(sq(sumNumber(2)));

//We use an arrow function if we want to pass an unnamed function
//as argument to another function.
console.log("This will be an example of an arrow function");
const arr = x => x + 2;
console.log("the input maps to the output...", arr(2));
const sqrt = x => x * x;
console.log("we will call both arrow functions.");
console.log(sqrt(arr(3)));

//When a function are assigned to the properties of an object we call them
//methods.
//So all JS objects (including arrays) have methods.
let emptyArray = [];
emptyArray.push(1, 2, 3, 4, 5, 6);
console.log("The Numbers in the Array: ", emptyArray);
emptyArray.reverse()
console.log("it seems the numbers are reversed: ", emptyArray);

//looking at functions in JS.
function factorial_compute(x) {

    if (x == 0) {
        return 1;
    }else {
        return x * factorial_compute(x - 1);
    }
}

console.log("The factorial is: ",factorial_compute(4));











