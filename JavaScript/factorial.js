//this function calculates the factorial of any given n number.

const factoNumber = (n) => {
    let res = 1;
    for (let i = 2; i <= n; i++) {
        res += i;
    }
    return res;
}

let num = 5;
console.log(`Factorial of ${num} is: ${(factoNumber(num))}`);
