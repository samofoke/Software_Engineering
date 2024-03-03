//Looking at the basics of TypeScript

const firstName = "Sam";
//const nameLength = firstName.length();

//console.log("output: ", nameLength);

//The infered type: string

let bestSong = Math.random() > 0.5 ? "Chain of Fools" : "Respect";

console.log("output: ", bestSong);

//working with union Types

let tk: string | null = null;

if (Math.random() > 0.5) {
  tk = "it seems to be working";
  console.log("get value type: ", tk);
}

let asignSomething = "";

asignSomething = ":)";

console.log("print: ", asignSomething);

let x: number = 5;
let y: number = 3;
console.log(x + y);
