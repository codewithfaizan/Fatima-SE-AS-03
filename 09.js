const readlineSync = require('readline-sync');
let login = readlineSync.question('Enter login type (Employee/Director/or leave blank): ');
const message =
    login === "Employee"
        ? "Hello"
        : login === "Director"
            ? "Greetings"
            : login === ""
                ? "No login"
                : "";

                console.log("Message:", message);

//Enter login type (Employee/Director/or leave blank): Director
// Message: Greetings
// Ued AI for this