// I am looking at functional programming

let data = [1, 1, 3, 5, 5];
/*
let total = 0;

for (let i = 0; i < data.length; i++) {
    total += data[i];
}

let mean = total/data.length;

total = 0;

for (let i = 0; i < data.length; i++) {
    let deviation = data[i] - mean;
    total += deviation * deviation;
}

let stddev = Math.sqrt(total/(data.length - 1));

console.log("res: ", stddev);
*/


// Looking at high order functions

function not(f) {
    return function(...args) {
        let results = f.apply(this, args);
        return !results;
    }
}

const even = x => x % 2 === 0;
const odd = not(even);

data.every(odd);

console.log("this is odd: ", odd);


// Memoization
//  This is caching or storing the results of a function.

function memoize(f) {

    const cache = new Map()

    return function(...args) {
        let key = args.length + args.join("+");
        if (cache.has(key)) {
            console.log(`Fetching from cached ${args} and ${cache.has(key)}`);
            return cache.get(key);
        } else {
            console.log(`calculating for ${args}`);
            let result = f.apply(this, args);
            cache.set(key, result);
            return result;
        }
    }
}

// using this function with an example of greatest commonn divisor.

function gcd(a, b) {
    if (a < b) {
        [a, b] = [b, a];
    }
    while (b !== 0) {
        [a, b] = [b, a % b];
    }
    return a;
}

const gcdmemo = memoize(gcd);

console.log("The gcd memoize: ",gcdmemo(85, 187));

//writing the function recursive.

const factorial = memoize(function(n) {
    return (n <= 1) ? 1 : n * factorial(n - 1);
})

console.log("using memoize in factorial: ", factorial(5));
























