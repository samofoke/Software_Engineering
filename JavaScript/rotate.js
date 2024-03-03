function rotLeft(a, d) {
  // Calculate effective rotations
  d = d % a.length;
  console.log("arr: ", a);
  console.log("int: ", d);
  console.log(`slice ${a.slice(d)}`);
  console.log(`concat ${a.slice(d).concat(a.slice(0, d))}`);

  // Split the array and concatenate in reverse order
  return a.slice(d).concat(a.slice(0, d));
}

// Example
const a = [1, 2, 3, 4, 5];
const d = 4;
console.log(rotLeft(a, d)); // Outputs: [5, 1, 2, 3, 4]
