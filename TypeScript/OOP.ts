// OOP in TypeScript
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
    - Inheritance is about code reuse
    
- Polymorphism
    - 
*/

// - Encapsulation is information hidding

import * as readline from "readline"; 

class Employee {
    private name: string;
    private age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    public displayName(): string {
        return `Employee Name: ${this.name} and age: ${this.age}`;
    }

    //building a setter for the name 

    public setName(name: string): void {
        this.name = name;
    }

    public getName(): string {
        return this.name;
    } 
}


const ReadLine = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

ReadLine.question("Enter Employee Name: ", (n) => {
    ReadLine.question("Enter Employee Age: ", (g) => {
        const parsAge = parseInt(g);

        if (!n || isNaN(parsAge)) {
            console.log("Please enter the Employee's name and age: ");
            process.exit(1);
        }

        let enterEmployeeName = new Employee(n, parsAge);

        console.log(enterEmployeeName.displayName());
        enterEmployeeName.setName("Sam Smith");
        console.log(enterEmployeeName.getName());

        ReadLine.close();
    })
})