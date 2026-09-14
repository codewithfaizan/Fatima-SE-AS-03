const readlineSync = require('readline-sync');

let balance = 10000; // starting balance in ₹

function showMenu() {
    console.log("\n===== ATM MENU =====");
    console.log("1. Check Balance");
    console.log("2. Deposit");
    console.log("3. Withdraw");
    console.log("4. Exit");
}

function showBalance() {
    console.log(`Your current balance is ₹${balance}`);
}

function deposit(amount) {
    if (isNaN(amount) || amount <= 0) {
        console.log("Invalid amount. Please enter a positive number.");
        return;
    }
    balance += amount;
    console.log(`₹${amount} deposited successfully.`);
    showBalance();
}

function withdraw(amount) {
    if (isNaN(amount) || amount <= 0) {
        console.log("Invalid amount. Please enter a positive number.");
        return;
    }
    if (amount > balance) {
        console.log("Insufficient balance.");
        return;
    }
    balance -= amount;
    console.log(`₹${amount} withdrawn successfully.`);
    showBalance();
}

while (true) {
    showMenu();
    let choice = parseFloat(readlineSync.question('Choose an option (1-4): '));

    switch (choice) {
        case 1:
            showBalance();
            break;

        case 2:
            let depositAmount = parseFloat(readlineSync.question('Enter amount to deposit: ₹'));
            deposit(depositAmount);
            break;

        case 3:
            let withdrawAmount = parseFloat(readlineSync.question('Enter amount to withdraw: ₹'));
            withdraw(withdrawAmount);
            break;

        case 4:
            console.log("Thank you for using the ATM. Goodbye!");
            process.exit(); // ends the Node.js program immediately

        default:
            console.log("Invalid choice. Please select 1-4.");
    }
}

// ===== ATM MENU =====
// 1. Check Balance
// 2. Deposit
// 3. Withdraw
// 4. Exit
// Choose an option (1-4): 3
// Enter amount to withdraw: ₹800
// ₹800 withdrawn successfully.
// Your current balance is ₹9200