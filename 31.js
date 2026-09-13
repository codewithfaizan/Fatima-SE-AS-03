const readlineSync = require('readline-sync');

let num1 = parseFloat(readlineSync.question('Enter first number: '));
let num2 = parseFloat(readlineSync.question('Enter second number: '));
let operator = readlineSync.question('Enter operator (+, -, *, /, %, **): ');

let result;

switch (operator) {
    case '+':
        result = num1 + num2;
        break;

    case '-':
        result = num1 - num2;
        break;

    case '*':
        result = num1 * num2;
        break;

    case '/':
        result = num1 / num2;
        break;

    case '%':
        result = num1 % num2;
        break;

    case '**':
        result = num1 ** num2;
        break;

    default:
        console.log("Invalid operator");
}

if (result !== undefined) {
    console.log(`Result: ${result}`);
}

// used AI 
// Enter first number: 2
// Enter second number: 5
// Enter operator (+, -, *, /, %, **): /
// Result: 0.4