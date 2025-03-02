//The conecpt of looking at logic of programs

const conecptOne = () => {
  let total = 0;
  let count = 1;

  for (let i = 0; i <= 10; i++) {
    if (count != 11) {
      total += count;
      count += 1;
      console.log("test: ", total);
    }
  }
  return total;
};

console.log("test the function: ", conecptOne());

//console.log(sum(range(1, 10)));

const factorialFunction = (n) => {
  if (n === 0) {
    return 1;
  } else {
    return factorialFunction(n - 1) * n;
  }
};

console.log("factorial: ", factorialFunction(5));
