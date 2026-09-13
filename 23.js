const readlineSync = require('readline-sync');

let number;

do {
    number = parseFloat(readlineSync.question('Enter a number greater than 100: '));
} while (number <= 100);

console.log(`Valid number: ${number}`);


// used AI 
// Enter a number greater than 100: 78
// Enter a number greater than 100: 900
// Valid number: 900