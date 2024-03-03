// Polymorphism in object-oriented programming allows objects of different classes to be treated as objects of a common superclass. 
// It's particularly powerful in scenarios involving inheritance, where a subclass can override or extend the functionality of a superclass. 
// Let's extend our banking example to demonstrate polymorphism.

// We'll introduce a general `Account` class and two subclasses, `CheckingAccount` and `SavingsAccount`, each with a unique method.
//  We'll then show how polymorphism allows us to treat both types of accounts uniformly in certain contexts.

// ### Base Class and Subclasses


// Base class

class Account {
    protected balance: number;

    constructor(initialBalance: number) {
        this.balance = initialBalance;
    }

    public deposit(amount: number): void {
        if (amount > 0) {
            this.balance += amount;
        }
    }

    public getBalance(): number {
        return this.balance;
    }

    // Method to be overridden
    public accountType(): string {
        return "Generic Account";
    }
}

// CheckingAccount subclass

class CheckingAccount extends Account {
    public accountType(): string {
        return "Checking Account";
    }

    // Specific method for CheckingAccount
    public issueCheck(amount: number): void {
        if (amount <= this.balance) {
            console.log(`Issued a check for R${amount}`);
            this.balance -= amount;
        } else {
            console.log("Insufficient funds to issue the check.");
        }
    }
}

// SavingsAccount subclass

class SavingsAccounts extends Account {
    private interestRate: number;

    constructor(initialBalance: number, interestRate: number) {
        super(initialBalance);
        this.interestRate = interestRate;
    }

    public accountType(): string {
        return "Savings Account";
    }

    // Specific method for SavingsAccount
    public applyInterest(): void {
        const interest = this.getBalance() * this.interestRate / 100;
        this.balance += interest;
    }
}


// ### Demonstrating Polymorphism

function displayAccountDetails(account: Account) {
    console.log(`Account Type: ${account.accountType()}, Balance: R${account.getBalance()}`);
}

let checkingAccount = new CheckingAccount(1000);
let savingsAccounts = new SavingsAccounts(1000, 5);

// Polymorphic behavior
displayAccountDetails(checkingAccount);  // Treats CheckingAccount as Account
displayAccountDetails(savingsAccounts);   // Treats SavingsAccount as Account


// In this example:
// - Both `CheckingAccount` and `SavingsAccount` override the `accountType` method from the `Account` 
// class to return their specific account types.
// - The `displayAccountDetails` function takes an `Account` object as a parameter. This means it can 
// accept any object that is an instance of `Account` or any of its subclasses (`CheckingAccount` or `SavingsAccount`).
// - This demonstrates polymorphism: `CheckingAccount` and `SavingsAccount` are treated as `Account`
// within the `displayAccountDetails` function, yet they retain their individual behaviors 
// (like their specific implementations of `accountType`).

// Polymorphism allows for flexibility and scalability in your code. You can add new types of accounts or
//  modify existing ones without changing the functions that operate on the generic `Account` type. 
//  This makes your code more modular and easier to maintain.