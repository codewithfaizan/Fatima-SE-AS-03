const readline = require("readline-sync");

const num = readline.question("Enter the number : ");

for(let i = 1; i<=10; i++){
    const result = num*i
    console.log(`${num} x ${i} = ${result}`)
}

// used from js practice lab 
// 6 x 1 = 6
// 6 x 2 = 12
// 6 x 3 = 18
// 6 x 4 = 24
// 6 x 5 = 30
// 6 x 6 = 36
// 6 x 7 = 42
// 6 x 8 = 48
// 6 x 9 = 54
// 6 x 10 = 60