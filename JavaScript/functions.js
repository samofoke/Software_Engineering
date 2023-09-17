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
