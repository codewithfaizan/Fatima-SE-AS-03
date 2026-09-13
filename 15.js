const readlineSync = require('readline-sync');
let userName = readlineSync.question('Enter username: ');
let password = readlineSync.question ("enter password:");

if (userName === "Admin" && password === "123") {
    console.log("Access granted");
}else{
    console.log("Access denied");
}

// used AI for line Number2-3
// Enter username: Admin
// enter password:123 
// Access granted