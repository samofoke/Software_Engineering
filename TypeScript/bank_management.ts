// // This is an abstract class 

// class BankAccount {
//     private balance: number;


//     constructor(initialBalance: number) {
//         this.balance = initialBalance;
//     }

//     protected setBalance(amount: number): void {
//         this.balance = amount;
//     }

//     public deposit(amount: number): void {
//         if (amount > 0) {
//             this.balance += amount;
//             console.log(`The deposited R${amount}. The new balance is R${this.balance}`);
//         } else {
//             console.log("The Deposited amount needs to be positive.");
//         }
//     }
    
//     public withdraw(amount: number): void {
//         if (amount <= this.balance) {
//             this.balance -= amount;
//             console.log(`The amount withdrawn R${amount}, the remaining balance is R${this.balance}`);
//         } else {
//             console.log("You have insuficient funds in your withdrawal.");
//         }
//     }

//     getBalance(): number {
//         return this.balance;
//     }
// }


// // Adding The concept of Inheritance, which allows a Class to inherit properties and methods from another Class

// // in this case the SavingAccount will inherit from the BankAccount


// class SavingsAccount extends BankAccount {
//     private interestRate: number;

//     constructor(initialBalnce: number, interestRate: number) {
//         super(initialBalnce);
//         this.interestRate = interestRate;
//     }

//     public applyInterest(): void {
//         const interest = this.getBalance() * this.interestRate / 100;
//         this.setBalance(this.getBalance() + interest);
//         console.log(`Interest applied. New balance is R${this.getBalance()}`)
//     }
// }

// // let myAccount = new BankAccount(2500);
// // console.log(`The initial balance: R${myAccount.getBalance()}`);

// let savingsAccount = new SavingsAccount(3000, 8);
// console.log(`Intial balance: R${savingsAccount.getBalance()}`)
// savingsAccount.deposit(1500);
// savingsAccount.applyInterest();

// // myAccount.deposit(200);
// // myAccount.withdraw(500);
// // console.log(`The final balance: R${myAccount.getBalance()}`);
// console.log(`Balnce after interest: R${savingsAccount.getBalance()}`);