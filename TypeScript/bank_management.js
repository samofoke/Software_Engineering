var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var BankAccount = /** @class */ (function () {
    function BankAccount(initialBalance) {
        this.balance = initialBalance;
    }
    BankAccount.prototype.setBalance = function (amount) {
        this.balance = amount;
    };
    BankAccount.prototype.deposit = function (amount) {
        if (amount > 0) {
            this.balance += amount;
            console.log("The deposited R".concat(amount, ". The new balance is R").concat(this.balance));
        }
        else {
            console.log("The Deposited amount needs to be positive.");
        }
    };
    BankAccount.prototype.withdraw = function (amount) {
        if (amount <= this.balance) {
            this.balance -= amount;
            console.log("The amount withdrawn R".concat(amount, ", the remaining balance is R").concat(this.balance));
        }
        else {
            console.log("You have insuficient funds in your withdrawal.");
        }
    };
    BankAccount.prototype.getBalance = function () {
        return this.balance;
    };
    return BankAccount;
}());
// Adding The concept of Inheritance, which allows a Class to inherit properties and methods from another Class
// in this case the SavingAccount will inherit from the BankAccount
var SavingsAccount = /** @class */ (function (_super) {
    __extends(SavingsAccount, _super);
    function SavingsAccount(initialBalnce, interestRate) {
        var _this = _super.call(this, initialBalnce) || this;
        _this.interestRate = interestRate;
        return _this;
    }
    SavingsAccount.prototype.applyInterest = function () {
        var interest = this.getBalance() * this.interestRate / 100;
        this.setBalance(this.getBalance() + interest);
        console.log("Interest applied. New balance is R".concat(this.getBalance()));
    };
    return SavingsAccount;
}(BankAccount));
// let myAccount = new BankAccount(2500);
// console.log(`The initial balance: R${myAccount.getBalance()}`);
var savingsAccount = new SavingsAccount(3000, 8);
console.log("Intial balance: R".concat(savingsAccount.getBalance()));
savingsAccount.deposit(1500);
savingsAccount.applyInterest();
// myAccount.deposit(200);
// myAccount.withdraw(500);
// console.log(`The final balance: R${myAccount.getBalance()}`);
console.log("Balnce after interest: R".concat(savingsAccount.getBalance()));
