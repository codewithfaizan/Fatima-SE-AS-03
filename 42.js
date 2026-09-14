const readlineSync = require('readline-sync');

function pow(x, n) {
    let result = 1;
    for (let i = 0; i < n; i++) {
        result *= x;
    }
    return result;
}

let x = parseFloat(readlineSync.question('Enter x: '));
let n = parseFloat(readlineSync.question('Enter n: '));

console.log(`${x} to the power of ${n} is ${pow(x, n)}`);

// Enter x: 8
// Enter n: 9
// 8 to the power of 9 is 134217728