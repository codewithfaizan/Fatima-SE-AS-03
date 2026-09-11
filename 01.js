const readlineSync = require('readline-sync');
const num1 = parseFloat(readlineSync.question('Enter the first number: '));
const num2 = parseFloat(readlineSync.question('Enter the second number: '));
if (num1 > num2) {
    console.log('First number is greater');
} else if (num2 > num1) {
    console.log('Second number is greater');
} else {
    console.log('Both numbers are equal');
}

// output Enter the first number: 88
// Enter the second number: 90
// Second number is greater
// used ai for help
