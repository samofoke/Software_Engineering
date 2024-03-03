//Looking at the basics of TypeScript
var firstName = "Sam";
//const nameLength = firstName.length();
//console.log("output: ", nameLength);
//The infered type: string
var bestSong = Math.random() > 0.5 ? "Chain of Fools" : "Respect";
console.log("output: ", bestSong);
//working with union Types
var tk = null;
if (Math.random() > 0.5) {
    tk = "it seems to be working";
    console.log("get value type: ", tk);
}
var asignSomething = "";
asignSomething = ":)";
console.log("print: ", asignSomething);
var x = 5;
var y = 3;
console.log(x + y);
