const readlineSync = require('readline-sync');
const age = parseFloat(readlineSync.question('Enter the age: '));

if (age < 13) {
    console.log('child');
} else if (age <= 19) {
    console.log('teenager');
} else if (age < 60) {
    console.log('adult');
} else {
    console.log('senior');
}

// used ai for line 6
// Enter the age: 99
// senior
// Enter the age: 16
// teenager