// Functions as types

type Run = (m: number) => boolean;

let runner: Run = (miles: number): boolean => {
  if (miles > 10) {
    return true;
  }
  return false;
};

console.log("test samples: ", runner(100));
console.log("test samples 2: ", runner(8));
