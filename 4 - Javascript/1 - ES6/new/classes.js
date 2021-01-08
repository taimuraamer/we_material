class Bank {
    balance;
    static test = 10;
    constructor(balance) {
        this.balance = balance;
    }
    getBalance() {
        return this.balance;
    }
    setBalance(balance)
    {
        this.balance = balance;
    }
    jama(amount) {
        this.balance = this.balance + amount;
    }
    manfi(amount)
    {
        this.balance = this.balance - amount;
    }
    interest() {
        rate = 5;
    }
}

class UBL extends Bank {
    constructor(amount) {
        super(amount)
    }
    interest() {
        rate = 10;
    }
}

const bank = new Bank(100);
const ubl = new UBL(400);

Bank.test = 20;

console.log(Bank.test)
console.log(UBL.test)


bank.jama(500);
bank.manfi(200);


// console.log(bank.getBalance());