const readlineSync = require('readline-sync');

let n = parseFloat(readlineSync.question('Enter a number: '));
let isPrime = true;

if (n < 2) {
    isPrime = false; 
} else {
    for (let i = 2; i < n; i++) {
        if (n % i === 0) {
            isPrime = false;
            break; 
        }
    }
}

if (isPrime) {
    console.log(`${n} is prime`);
} else {
    console.log(`${n} is not prime`);
}

// used AI for this
// Enter a number: 96
// 96 is not prime