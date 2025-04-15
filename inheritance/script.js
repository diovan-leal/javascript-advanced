class BankAccount {
    constructor(accountNumber, accountHolder, balance = 0) {
        this.accountNumber = accountNumber
        this.accountHolder = accountHolder
        this.balance = Number(balance >= 0 ? balance : 0)
    }

    deposit(amount) {
        this.validateAmount(amount)
        this.balance += Number(amount)
        console.log(`Deposited: ${amount} new Balance: ${this.balance}`)
    }

    withdraw(amount) {
        this.validateAmount(amount)
        if (this.balance - Number(amount) < 0) {
            throw new Error('Insufficient funds')
        }

        this.balance -= Number(amount)
        console.log(`Withdraw: ${amount} new Balance: ${this.balance}`)
    }

    validateAmount(amount) {
        if (amount <= 0) {
            throw new Error('Invalid amount')
        }
    }
}

class InvestmentSimulator extends BankAccount {
    constructor(accountNumber, accountHolder, balance = 0, interestRate = 0.1, months = 1) {
        //reference the parent constructor
        super(accountNumber, accountHolder, balance)
        this.interestRate = interestRate
        this.months = months
    }

    calculateRoi() {
        for (let i= 0; i < this.months; i++) {
            this.balance += (this.balance * this.interestRate)
        }

        return this.balance
    }
}