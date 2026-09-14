const readlineSync = require('readline-sync');

function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}

function remainder(a, b) {
    return a % b;
}

function power(a, b) {
    return a ** b;
}

console.log("1. Add");
console.log("2. Subtract");
console.log("3. Multiply");
console.log("4. Divide");
console.log("5. Remainder");
console.log("6. Power");

let choice = parseFloat(readlineSync.question('Choose an option (1-6): '));
let a = parseFloat(readlineSync.question('Enter first number: '));
let b = parseFloat(readlineSync.question('Enter second number: '));

let result;

switch (choice) {
    case 1:
        result = add(a, b);
        break;

    case 2:
        result = subtract(a, b);
        break;

    case 3:
        result = multiply(a, b);
        break;

    case 4:
        result = divide(a, b);
        break;

    case 5:
        result = remainder(a, b);
        break;

    case 6:
        result = power(a, b);
        break;

    default:
        console.log("Invalid choice");
}

if (result !== undefined) {
    console.log(`Result: ${result}`);
}


// used AI 
// 1. Add
// 2. Subtract
// 3. Multiply
// 4. Divide
// 5. Remainder
// 6. Power
// Choose an option (1-6): 5
// Enter first number: 9
// Enter second number: 5
// Result: 4