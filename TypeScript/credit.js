var CreditCard = /** @class */ (function () {
    function CreditCard(cardNumber, expiryDate, cvv, creditLimit) {
        this.cardNumber = cardNumber;
        this.expiryDate = expiryDate;
        this.cvv = cvv;
        this.creditLimit = creditLimit;
        this.currentDebt = 0; // Initially, there's no debt
    }
    CreditCard.prototype.charge = function (amount) {
        if (amount <= 0) {
            console.log("Charge amount must be positive.");
            return false;
        }
        if (this.currentDebt + amount > this.creditLimit) {
            console.log("Credit limit exceeded. Transaction declined.");
            return false;
        }
        this.currentDebt += amount;
        console.log("Charge of R".concat(amount, " successful. New debt: R").concat(this.currentDebt, "."));
        return true;
    };
    CreditCard.prototype.makePayment = function (amount) {
        if (amount > this.currentDebt) {
            console.log("Payment amount exceeds current debt. Payment adjusted.");
            amount = this.currentDebt;
        }
        this.currentDebt -= amount;
        console.log("Payment of R".concat(amount, " successful. Remaining debt: R").concat(this.currentDebt, "."));
    };
    CreditCard.prototype.getAvailableCredit = function () {
        return this.creditLimit - this.currentDebt;
    };
    return CreditCard;
}());
// Usage
var myCreditCard = new CreditCard("1234-5678-9123-4567", "12/25", "123", 5000);
myCreditCard.charge(1000); // Charging R1000 to the card
myCreditCard.charge(4000); // Attempt to charge beyond the credit limit
console.log("Available credit: R".concat(myCreditCard.getAvailableCredit()));
myCreditCard.makePayment(500); // Making a payment of R500
console.log("Available credit: R".concat(myCreditCard.getAvailableCredit()));
