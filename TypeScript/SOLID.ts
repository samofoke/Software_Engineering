// Certainly! The SOLID principles are a set of five design principles intended to make software designs more understandable, flexible, 
// and maintainable. Let's explore each of the SOLID principles with examples using TypeScript, focusing on the bank concept:

// ### 1. Single Responsibility Principle (SRP)
// A class should have one, and only one, reason to change, meaning it should have only one job or responsibility.

// **Example: Splitting Account Management and Logging:**
// ```typescript

class BankAccount {
    private balance: number = 0;

    constructor(initialBalance: number) {
        this.balance = initialBalance;
    }

    deposit(amount: number) {
        this.balance += amount;
    }

    withdraw(amount: number) {
        if (amount <= this.balance) {
            this.balance -= amount;
        }
    }

    getBalance(): number {
        return this.balance;
    }
}

class AccountLogger {
    logTransaction(transactionType: string, amount: number, currentBalance: number) {
        console.log(`${transactionType} of R${amount}. Current Balance: R${currentBalance}`);
    }
}


// `BankAccount` handles the core banking operations, while `AccountLogger` 
// is responsible for logging account transactions.

// ### 2. Open/Closed Principle (OCP)
// Software entities should be open for extension, but closed for modification.

// **Example: Extending Functionality with Inheritance:**
// ```typescript

class SavingsAccount extends BankAccount {
    private interestRate: number;

    constructor(initialBalance: number, interestRate: number) {
        super(initialBalance);
        this.interestRate = interestRate;
    }

    applyInterest() {
        const interest = this.getBalance() * this.interestRate / 100;
        this.deposit(interest);
    }
}


// `SavingsAccount` extends `BankAccount`, adding new functionality without modifying the existing `BankAccount` code.

// ### 3. Liskov Substitution Principle (LSP)
// Objects of a superclass shall be replaceable with objects of its subclasses without affecting the correctness of the program.

// **Example: Using Subclasses Interchangeably:**
// ```typescript

function displayAccountBalance(account: BankAccount) {
    console.log(`Account Balance: R${account.getBalance()}`);
}

let myAccount = new BankAccount(1000);
let mySavingsAccount = new SavingsAccount(1000, 5);

displayAccountBalance(myAccount);        // Works with BankAccount
displayAccountBalance(mySavingsAccount);  // Also works with SavingsAccount


// Both `BankAccount` and `SavingsAccount` can be used interchangeably without affecting the `displayAccountBalance` function.

// ### 4. Interface Segregation Principle (ISP)
// A client should not be forced to depend on interfaces it does not use.

// **Example: Specific Interfaces for Different Account Types:**
// ```typescript

interface IInterestBearingAccount {
    applyInterest(): void;
}

class FixedDepositAccount extends BankAccount implements IInterestBearingAccount {
    // Implementation specific to fixed deposit accounts
    applyInterest() {
        // Apply interest logic
    }
}


// `FixedDepositAccount` implements `IInterestBearingAccount`, adhering only to the interfaces relevant to it.

// ### 5. Dependency Inversion Principle (DIP)
// High-level modules should not depend on low-level modules. Both should depend on abstractions.

// **Example: Dependency Injection in Account Processing:**
// ```typescript

interface ITransactionProcessor {
    processTransaction(account: BankAccount, amount: number): void;
}

class DepositProcessor implements ITransactionProcessor {
    processTransaction(account: BankAccount, amount: number) {
        account.deposit(amount);
    }
}

class WithdrawalProcessor implements ITransactionProcessor {
    processTransaction(account: BankAccount, amount: number) {
        account.withdraw(amount);
    }
}

class TransactionService {
    constructor(private processor: ITransactionProcessor) {}

    executeTransaction(account: BankAccount, amount: number) {
        this.processor.processTransaction(account, amount);
    }
}

// `TransactionService` depends on the `ITransactionProcessor` abstraction, not concrete implementations. 
// This allows for flexible transaction processing. Each of these examples demonstrates one of the SOLID principles 
// in the context of a banking application, helping to create a more maintainable, scalable, and robust software architecture.