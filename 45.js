const readlineSync = require('readline-sync');

function getGrade(marks) {
    if (marks >= 90 && marks <= 100) {
        return "A";
    } else if (marks >= 80) {
        return "B";
    } else if (marks >= 70) {
        return "C";
    } else if (marks >= 60) {
        return "D";
    } else {
        return "F";
    }
}

let marks = parseFloat(readlineSync.question('Enter marks: '));
console.log(`Grade: ${getGrade(marks)}`);

// used AI for 3, 18 ,17 lines 
// Enter marks: 78
// Grade: C