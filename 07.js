const readlineSync = require('readline-sync');

const a = parseFloat(readlineSync.question('Enter the first number: '));
const b = parseFloat(readlineSync.question('Enter the second number: '));
const result = a+b<4 ? "below" : "minor" ;
console.log(result);

// Enter the first number: 857
// Enter the second number: 234
// minor

let type = a % 2 === 0 ? "Even" : "Odd";
console.log(type);

// Enter the first number: 3
// Odd