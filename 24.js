const readlineSync = require('readline-sync');

let password;

do{
    password = readlineSync.question('Enter Password:');
} while (password !== "TheMaster");
console.log("welcome");

// used AI in line 7
// Enter Password:mass
// Enter Password:masdff
// Enter Password:themaster
// Enter Password:TheMaster
// welcome