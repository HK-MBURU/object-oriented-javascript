// Coding Challenge: Bank Account Management System
class BankAccount {
  constructor(accountNumber, accountHolder, balance) {
    this._accountNumber = accountNumber;
    this._accountHolder = accountHolder;
    this._balance = balance;
  }
  get accountNumber() {
    return this._accountNumber;
  }
  get accountHolder() {
    return this._accountHolder;
  }
  get balance() {
    return this._balance;
  }
  deposit(amount) {
    this._balance += amount;
    console.log(
      `You have deposited ${amount} into ${this._accountNumber} new balance is ${this._balance}`
    );
  }
  withdraw(amount) {
    if (amount <= this._balance) {
      this._balance -= amount;
      console.log(
        `You have withdrawn ${amount} from your account ${this._accountNumber} new balance is ${this._balance}`
      );
    } else {
      console.log(
        `Insufficient balance in account to withdraw ${amount} from your account ${this._accountNumber}`
      );
    }
  }
}
class SavingAccount extends BankAccount{
    constructor(accountNumber,accountHolder,balance,interestRate){
        super(accountNumber,accountHolder,balance)
        this._interestRate = interestRate
    }
    calculateInterest(){
        const interest=this._balance*(this._interestRate/100)
        console.log(`Interest for account ${this._accountNumber}: ${interest}`);
    }
}
class CheckingAccount extends BankAccount{
    constructor(accountNumber,accountHolder,balance,overdraftLimit){
        super(accountNumber,accountHolder,balance)
        this._overdraftLimit = overdraftLimit
    }
    withdraw(amount){
        const availableBalance=this._balance+this._overdraftLimit
        if (amount<=availableBalance) {
            if(amount>this._balance){
                const overdraftAmount=amount-this._balance
                this._balance=0
                console.log(`Withdraw ${this._overdraftLimit} from overdraft limit for account ${this._accountNumber}`);
                console.log(`Withdraw ${overdraftAmount} from account ${this._accountNumber}`);
            }
            else{
                this._balance-=amount
                console.log(`Withdraw ${amount} from account ${this._accountNumber}`);
            }
            
        }else{
            console.log(`Withdrawal amount exceeds available balance and overdraw limit in your account ${this._accountNumber}`);
        }
    }
}

const savingsAcount=new SavingAccount("015987","Haron Mburu",10000,2.5)
const checkingAccount=new CheckingAccount("598077","Gideon Kiongo",1000,2000);

// Retrieve account information
console.log("Savings Account Information:");
console.log("Account Number:", savingsAcount.accountNumber);
console.log("Account Holder:", savingsAcount.accountHolder);
console.log("Balance:", savingsAcount.balance);

console.log("\nChecking Account Information:");
console.log("Account Number:", checkingAccount.accountNumber);
console.log("Account Holder:", checkingAccount.accountHolder);
console.log("Balance:", checkingAccount.balance);

// transactions
savingsAcount.deposit(1000);
savingsAcount.calculateInterest();
savingsAcount.withdraw(2000);

checkingAccount.deposit(500);
checkingAccount.withdraw(3000);
checkingAccount.withdraw(3000);