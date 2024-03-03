"use strict";
// OOP in TypeScript
Object.defineProperty(exports, "__esModule", { value: true });
/*
- Encapsulation
    - it protects that data so that
    nothing outside of the container can modify or view it. Instead, if you want
    to make use of the data, it must be done through functions that are
    controlled by the container object.

- Abstraction 
    - When using abstraction, you hide
    the internal implementation of how data is managed and provide a more
    simplified interface to the outside code.

- Inheritance
    - 
- Polymorphism
*/
// - Encapsulation is information hidding
var readline = require("readline");
var Employee = /** @class */ (function () {
    function Employee(name, age) {
        this.name = name;
        this.age = age;
    }
    Employee.prototype.displayName = function () {
        return "Employee Name: ".concat(this.name, " and age: ").concat(this.age);
    };
    //building a setter for the name 
    Employee.prototype.setName = function (name) {
        this.name = name;
    };
    Employee.prototype.getName = function () {
        return this.name;
    };
    return Employee;
}());
var ReadLine = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
ReadLine.question("Enter Employee Name: ", function (n) {
    ReadLine.question("Enter Employee Age: ", function (g) {
        var parsAge = parseInt(g);
        if (!n || isNaN(parsAge)) {
            console.log("Please enter the Employee's name and age: ");
            process.exit(1);
        }
        var enterEmployeeName = new Employee(n, parsAge);
        console.log(enterEmployeeName.displayName());
        enterEmployeeName.setName("Sam Smith");
        console.log(enterEmployeeName.getName());
        ReadLine.close();
    });
});
