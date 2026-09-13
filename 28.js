const readlineSync = require('readline-sync');

let n = parseFloat(readlineSync.question('Enter n: '));

for (let num = 2; num <= n; num++) {
    let isPrime = true;

    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            isPrime = false;
            break;
        }
    }

    if (isPrime) {
        console.log(num);
    }
}

// Enter n: 18
// 2
// 3
// 5
// 7
// 11
// 13
// 17
