const readlineSync = require('readline-sync');

function getSign(number) {
    if (number > 0) {
        return "Positive";
    } else if (number < 0) {
        return "Negative";
    } else {
        return "Zero";
    }
}

function isEven(number) {
    return number % 2 === 0;
}

function isPrime(number) {
    if (number < 2) {
        return false;
    }
    for (let i = 2; i <= Math.sqrt(number); i++) {
        if (number % i === 0) {
            return false;
        }
    }
    return true;
}

while (true) {
    let input = readlineSync.question('Enter a number (or "exit" to quit): ');

    if (input.toLowerCase() === "exit") {
        console.log("Goodbye!");
        break;
    }

    let number = parseFloat(input);

    if (isNaN(number)) {
        console.log("That's not a valid number. Try again.");
        continue;
    }

    console.log(`Sign: ${getSign(number)}`);
    console.log(`${isEven(number) ? "Even" : "Odd"}`);
    console.log(`${isPrime(number) ? "Prime" : "Not Prime"}`);
    console.log("---");
}

// used AI for line 29-47 
// Enter a number (or "exit" to quit): 9
// Sign: Positive
// Odd
// Not Prime
// ---
// Enter a number (or "exit" to quit): 3
// Sign: Positive
// Odd
// Prime
// ---
// Enter a number (or "exit" to quit): 6
// Sign: Positive
// Even
// Not Prime
// ---
// Enter a number (or "exit" to quit): 1
// Sign: Positive
// Odd
// Not Prime
// ---
// Enter a number (or "exit" to quit): exit
// Goodbye!