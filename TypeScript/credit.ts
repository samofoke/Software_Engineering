// This is an example of Encapsulation 

class CreditCard {
    private cardNumber: string;
    private expiryDate: string;
    private cvv: string;
    private creditLimit: number;
    private currentDebt: number;

    constructor(cardNumber: string, expiryDate: string, cvv: string, creditLimit: number) {
        this.cardNumber = cardNumber;
        this.expiryDate = expiryDate;
        this.cvv = cvv;
        this.creditLimit = creditLimit;
        this.currentDebt = 0; // Initially, there's no debt
    }

    public charge(amount: number): boolean {
        if (amount <= 0) {
            console.log("Charge amount must be positive.");
            return false;
        }
        if (this.currentDebt + amount > this.creditLimit) {
            console.log("Credit limit exceeded. Transaction declined.");
            return false;
        }
        this.currentDebt += amount;
        console.log(`Charge of R${amount} successful. New debt: R${this.currentDebt}.`);
        return true;
    }

    public makePayment(amount: number): void {
        if (amount > this.currentDebt) {
            console.log("Payment amount exceeds current debt. Payment adjusted.");
            amount = this.currentDebt;
        }
        this.currentDebt -= amount;
        console.log(`Payment of R${amount} successful. Remaining debt: R${this.currentDebt}.`);
    }

    public getAvailableCredit(): number {
        return this.creditLimit - this.currentDebt;
    }

    // Additional methods like card details retrieval can be implemented here
    // ensuring sensitive information (like CVV) is not exposed.
}

// Usage
let myCreditCard = new CreditCard("1234-5678-9123-4567", "12/25", "123", 5000);
myCreditCard.charge(1000); // Charging R1000 to the card
myCreditCard.charge(4000); // Attempt to charge beyond the credit limit
console.log(`Available credit: R${myCreditCard.getAvailableCredit()}`);
myCreditCard.makePayment(500); // Making a payment of R500
console.log(`Available credit: R${myCreditCard.getAvailableCredit()}`);
