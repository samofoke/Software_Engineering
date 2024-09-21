//looking at examples JavaScript sample code

const factorialSqeunce = (n) => {
  if (n === 0) {
    return 1;
  } else {
    return factorialSqeunce(n - 1) * n;
  }
};

let n = 8;

console.log(`factorial of ${n} is: ${factorialSqeunce(n)}`);
