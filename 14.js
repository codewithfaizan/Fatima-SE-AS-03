const readlineSync = require('readline-sync');
let Age = parseFloat(readlineSync.question('Enter age: '));
let licenseInput = readlineSync.question('Do you have a driving license? (yes/no): ');
let hasLicense = licenseInput.trim().toLowerCase() === 'yes';

if (Age>=18 && hasLicense=== true) {
    console.log("You Can Drive");
} else {
    console.log("You cannot drive");
}

// used AI for line number 3-4
// Enter age: 78
// Do you have a driving license? (yes/no): yes
// You Can Drive