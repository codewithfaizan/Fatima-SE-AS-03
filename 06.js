const readlineSync = require('readline-sync');
const num1 = parseFloat(readlineSync.question('Enter the first number: '));
const num2 = parseFloat(readlineSync.question('Enter the second number: '));
if (num1>num2){
    console.log(num1 + " is largest")
}else if (num2>num1) {
    console.log(num2 + " is largest")
}
// Enter the first number: 90
// Enter the second number: 46
// 90 is largest


const readlineSync = require('readline-sync');

const a = parseFloat(readlineSync.question('Enter the first number: '));
const b = parseFloat(readlineSync.question('Enter the second number: '));
const c = parseFloat(readlineSync.question('Enter the third number: '));

let largest;

if (a >= b && a >= c) {
    largest = a;
} else if (b >= a && b >= c) {
    largest = b;
} else {
    largest = c;
}

console.log(largest + " is the largest number");


// used AI for this part
// Enter the first number: 378
// Enter the second number: 963
// Enter the third number: 6789
// 6789 is the largest number