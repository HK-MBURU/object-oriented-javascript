# object-oriented-javascript

this is a coing challenge for creating Bank Account Management System
Coding Challenge: Bank Account Management System
Scenario: You are tasked with implementing a Bank Account Management System using Object-Oriented Programming (OOP) principles in JavaScript. The system should allow users to create different types of bank accounts, perform transactions such as deposits and withdrawals, and retrieve account information.

Requirements:
Create a base class called BankAccount with the following properties and methods:
Properties: accountNumber (string), accountHolder (string), balance (number).
Methods: getAccountNumber(), getAccountHolder(), getBalance(), deposit(amount), withdraw(amount).
Implement two derived classes: SavingsAccount and CheckingAccount. Both classes should inherit from the BankAccount base class and have additional properties specific to each account type.
The SavingsAccount class should have an additional property called interestRate (number) and a method called calculateInterest() that calculates and returns the interest amount based on the current balance and interest rate.
The CheckingAccount class should have an additional property called overdraftLimit (number) and a method called withdraw(amount) that allows overdraft up to the specified limit.
Implement proper encapsulation by making the properties private and providing getter and setter methods to access and modify the account details.
Create an instance of each account type and demonstrate the following operations:
Retrieve account information (account number, account holder, balance).
Deposit an amount into the account.
Withdraw an amount from the account.
For SavingsAccount, calculate and display the interest amount.
For CheckingAccount, perform a withdrawal that exceeds the current balance but remains within the overdraft limit.

Your implementation should showcase the principles of OOP, including inheritance, encapsulation, and polymorphism.

 

All the Best!
