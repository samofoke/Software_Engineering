// main.js
import { PI, degreesToRadians, Circle } from "./modules.js";

console.log("PI: ", PI); // Using the exported constant

let degrees = 90;
console.log(`${degrees} degrees in radians: `, degreesToRadians(degrees)); // Using the exported function

let circle = new Circle(5); // Using the exported class
console.log("Area of the circle: ", circle.area());
