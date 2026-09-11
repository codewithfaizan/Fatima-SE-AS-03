# JavaScript Core Exercises

A comprehensive collection of JavaScript exercises designed to help Miss Shagufta Fatima master fundamental programming concepts. This repository contains structured exercises covering comparisons, conditionals, loops, functions, and real-world applications.

---

## Table of Contents

1. [How to Use This Exercise Set](#how-to-use-this-exercise-set)
2. [Node.js Input Setup](#nodejs-input-setup)
3. [Topic 1: Comparisons](#topic-1--comparisons)
4. [Topic 2: `if`, `else if`, and `else`](#topic-2--if-else-if-and-else)
5. [Topic 3: Conditional Operator `?`](#topic-3--conditional-operator-)
6. [Topic 4: Multiple Conditions and Ternary Operators](#topic-4--multiple-conditions-and-ternary-operators)
7. [Topic 5: Logical Operators](#topic-5--logical-operators)
8. [Topic 6: Combining Comparisons and Logical Operators](#topic-6--combining-comparisons-and-logical-operators)
9. [Topic 7: `while` Loops](#topic-7--while-loops)
10. [Topic 8: `for` Loops](#topic-8--for-loops)
11. [Topic 9: Replacing `for` with `while`](#topic-9--replacing-for-with-while)
12. [Topic 10: Input Validation with Loops](#topic-10--input-validation-with-loops)
13. [Topic 11: `break`](#topic-11--break)
14. [Topic 12: `continue`](#topic-12--continue)
15. [Topic 13: Prime Numbers](#topic-13--prime-numbers)
16. [Topic 14: `switch`](#topic-14--switch)
17. [Topic 15: Combined `switch` + Input](#topic-15--combined-switch--input)
18. [Topic 16: Functions](#topic-16--functions)
19. [Topic 17: `return` and Control Flow](#topic-17--return-and-control-flow)
20. [Topic 18: Functions + Conditional Operator](#topic-18--functions--conditional-operator)
21. [Topic 19: Functions + Logical OR](#topic-19--functions--logical-or)
22. [Topic 20: Function Expressions](#topic-20--function-expressions)
23. [Topic 21: Arrow Functions](#topic-21--arrow-functions)
24. [Topic 22: `min(a, b)`](#topic-22--minab)
25. [Topic 23: `pow(x, n)`](#topic-23--powxn)
26. [Topic 24: Functions + Loops + Conditions](#topic-24--functions--loops--conditions)
27. [Topic 25: Functions + Prime Numbers](#topic-25--functions--prime-numbers)
28. [Topic 26: Combined CLI Program](#topic-26--combined-cli-program)
29. [Topic 27: Combined Calculator](#topic-27--combined-calculator)
30. [Topic 28: Loop + Function + Input](#topic-28--loop--function--input)
31. [Topic 29: Final Combined Challenge](#topic-29--final-combined-challenge)
32. [Topic 30: Final Master Challenge](#topic-30--final-master-challenge)
33. [Final Review Checklist](#final-review-checklist)
34. [Student Rule for Every Exercise](#student-rule-for-every-exercise)

---

## How to Use This Exercise Set

Each exercise contains:

* **Topic** — concept being practiced
* **Concept** — what you should understand first
* **Task** — what you need to build
* **Steps** — how to approach the problem
* **Hints** — guidance without giving the solution
* **Additional Practice** — extra variations to strengthen understanding

Do not jump directly to the solution.

Use this process:

```text
Read the concept
      ↓
Understand the task
      ↓
Write the logic in plain English
      ↓
Predict the output
      ↓
Write JavaScript
      ↓
Run with Node.js
      ↓
Test different inputs
      ↓
Explain why your code works
```

---

## Node.js Input Setup

For exercises requiring user input, use `readline-sync`.

Install it once:

```bash
npm install readline-sync
```

Basic usage:

```javascript
const readline = require("readline-sync");

const name = readline.question("Enter your name: ");

console.log(`Hello ${name}`);
```

For numbers:

```javascript
const age = readline.questionInt("Enter your age: ");

console.log(age);
```

For decimal numbers:

```javascript
const price = readline.questionFloat("Enter the price: ");

console.log(price);
```

> The exercises assume this basic setup is already understood.

---

## Topic 1 — Comparisons

### Concept

Comparison operators compare two values and produce a Boolean result:

```javascript
>
<
>=
<=
==
!=
===
!==
```

For example:

```javascript
5 > 4
```

produces:

```text
true
```

JavaScript has two important equality operators:

```javascript
==
```

and:

```javascript
===
```

`==` performs type conversion when necessary.

```javascript
5 == "5"
```

Result:

```text
true
```

`===` checks both value and type:

```javascript
5 === "5"
```

Result:

```text
false
```

For modern JavaScript, prefer:

```javascript
===
!==
```

unless you specifically need loose equality.

### Exercises

**01. Predict Comparison Results**

Without running the code, predict the result of every expression:

```javascript
5 > 4
"apple" > "pineapple"
"2" > "12"
undefined == null
undefined === null
null == "\n0\n"
null === +"\n0\n"
```

**Additional Practice:** Predict the results of `10 > 5`, `10 < 5`, `10 >= 10`, `10 <= 9`, `10 == "10"`, `10 === "10"`, `0 == false`, `0 === false`.

---

**02. Compare Two Numbers**

Ask the user for two numbers. Display:

```text
First number is greater
```

if the first number is greater.

Display:

```text
Second number is greater
```

if the second number is greater.

Display:

```text
Both numbers are equal
```

if they are equal.

---

**03. Equality: `==` vs `===`**

Predict and then run:

```javascript
console.log(5 == "5");
console.log(5 === "5");

console.log(0 == false);
console.log(0 === false);

console.log("" == false);
console.log("" === false);
```

Explain the difference between `==` and `===`.

**Additional Practice:** Test `null == undefined`, `null === undefined`, `"0" == 0`, `"0" === 0`.

---

## Topic 2 — `if`, `else if`, and `else`

### Concept

Conditional statements allow a program to make decisions.

Basic structure:

```javascript
if (condition) {
    // runs when condition is true
}
```

With `else`:

```javascript
if (condition) {
    // true
} else {
    // false
}
```

Multiple conditions:

```javascript
if (condition1) {

} else if (condition2) {

} else {

}
```

The program checks conditions from top to bottom.

### Exercises

**04. Show the Sign**

Ask the user for a number. Display `1` if the number is greater than zero, `-1` if less than zero, and `0` if equal to zero.

**Additional Practice:** Display `Positive`, `Negative`, `Zero` instead of `1`, `-1`, and `0`.

---

**05. Check Age**

Ask the user for their age. Display:

* `Child` for ages below 13
* `Teenager` for ages 13–19
* `Adult` for ages 20 and above

**Additional Practice:** Add `Senior` for age 60 and above.

---

**06. Find the Larger Number**

Ask for two numbers and display the larger number.

**Additional Practice:** Ask for three numbers and find the largest using only `if...else`. Do not use `Math.max()`.

---

## Topic 3 — Conditional Operator `?`

### Concept

The conditional operator, also called the ternary operator, is a compact form of `if...else`.

Example:

```javascript
const result = age >= 18 ? "Adult" : "Minor";
```

Structure:

```text
condition ? value-if-true : value-if-false
```

It is useful when choosing between two values.

### Exercises

**07. Rewrite `if` Using `?`**

Rewrite the following using the conditional operator:

```javascript
let result;

if (a + b < 4) {
    result = "Below";
} else {
    result = "Over";
}
```

**Additional Practice:** Rewrite conditional logic for age status and even/odd detection using `?`.

---

**08. Ternary Login Message**

Create:

```javascript
const isLoggedIn = true;
```

Use a ternary operator to produce `Welcome` when logged in and `Please login` when not logged in.

**Additional Practice:** Create a second version where the value comes from user input.

---

## Topic 4 — Multiple Conditions and Ternary Operators

### Concept

Multiple conditions can be written using `if...else if...else` or nested ternary operators.

Multiple ternary operators can represent the same logic:

```javascript
const message =
    login === "Employee"
        ? "Hello"
        : login === "Director"
            ? "Greetings"
            : login === ""
                ? "No login"
                : "";
```

Nested ternaries should be used carefully because readability can become poor.

### Exercises

**09. Rewrite `if...else if` Using Ternary Operators**

Rewrite the following logic using ternary operators:

```javascript
let message;

if (login === "Employee") {
    message = "Hello";
} else if (login === "Director") {
    message = "Greetings";
} else if (login === "") {
    message = "No login";
} else {
    message = "";
}
```

**Additional Practice:** Create your own four-level ternary for medal rankings (Gold, Silver, Bronze, No medal).

---

## Topic 5 — Logical Operators

### Concept

Logical operators combine conditions.

### AND — `&&`

Both conditions must be true:

```javascript
age >= 18 && hasLicense
```

### OR — `||`

At least one condition must be true:

```javascript
isAdmin || isManager
```

### NOT — `!`

Reverses a Boolean:

```javascript
!isLoggedIn
```

### Exercises

**10. Predict the Result of OR**

What will this produce?

```javascript
console.log(null || 2 || undefined);
```

Remember: `||` does not necessarily return `true` or `false`. It returns one of its operands.

**Additional Practice:** Predict the output of `false || 10`, `0 || 20`, `"Hello" || 30`, `null || undefined || 50`.

---

**11. Understand OR with Function Calls**

Create:

```javascript
function first() {
    console.log("first");
    return false;
}

function second() {
    console.log("second");
    return true;
}
```

Test:

```javascript
console.log(first() || second());
```

Explain why both functions may or may not execute. (Hint: JavaScript uses short-circuit evaluation.)

**Additional Practice:** Change `first()` to return `true` and observe what changes.

---

**12. Predict the Result of AND**

Predict:

```javascript
console.log(1 && null && 2);
```

For `&&`: evaluate from left to right, find the first falsy value, stop there, and return that operand.

**Additional Practice:** Predict `true && "Hello"`, `false && "Hello"`, `10 && 20`, `0 && 20`.

---

**13. AND with Functions**

Create:

```javascript
function first() {
    console.log("first");
    return true;
}

function second() {
    console.log("second");
    return false;
}
```

Run:

```javascript
console.log(first() && second());
```

Determine whether the second function executes.

**Additional Practice:** Change `first()` to return `false` and observe whether `second()` executes.

---

## Topic 6 — Combining Comparisons and Logical Operators

### Concept

Real programs often combine comparison operators with logical operators.

Example:

```javascript
age >= 18 && hasLicense
```

This means:

> The age must be at least 18 AND the user must have a license.

### Exercises

**14. Driving Eligibility**

Ask the user for:

* Age
* Whether they have a driving license

Display `You can drive` only when `age >= 18` AND `hasLicense === true`.

**Additional Practice:** Add a third requirement: `hasInsurance`. All three must be true.

---

**15. Admin Access**

Ask for:

* Username
* Password

Grant access if `username === "admin"` AND `password === "1234"`.

Otherwise print `Access denied`.

**Additional Practice:** Allow either `admin` or `manager` using `||`.

---

## Topic 7 — `while` Loops

### Concept

A `while` loop repeats code while a condition remains true.

Structure:

```javascript
while (condition) {
    // repeated code
}
```

Example:

```javascript
let i = 0;

while (i < 5) {
    console.log(i);
    i++;
}
```

The update is essential. Without it, you can create an infinite loop.

### Exercises

**16. Last Loop Value**

Predict the output:

```javascript
let i = 3;

while (i) {
    console.log(i--);
}
```

Create a table tracking `i` before, condition, output, and `i` after.

---

**17. Prefix vs Postfix in `while`**

Compare:

```javascript
let i = 0;

while (++i < 5) {
    console.log(i);
}
```

with:

```javascript
let i = 0;

while (i++ < 5) {
    console.log(i);
}
```

Track `i`, evaluate the condition, and determine the printed value for each.

---

## Topic 8 — `for` Loops

### Concept

A `for` loop combines initialization, condition, and update.

Structure:

```javascript
for (initialization; condition; update) {
    // body
}
```

Example:

```javascript
for (let i = 0; i < 5; i++) {
    console.log(i);
}
```

### Exercises

**18. Which Values Does the `for` Loop Show?**

Compare:

```javascript
for (let i = 0; i < 5; i++) {
    console.log(i);
}
```

with:

```javascript
for (let i = 0; i < 5; ++i) {
    console.log(i);
}
```

Predict, run, and compare. Explain why they produce the same output.

---

**19. Print Numbers**

Use a `for` loop to print numbers 1 to 10.

**Additional Practice:** Print numbers 10 to 1 in reverse.

---

**20. Output Even Numbers**

Use a `for` loop to output even numbers from 2 to 10.

**Additional Practice:** Print odd numbers from 1 to 20.

---

**21. Multiplication Table**

Ask the user for a number and print its multiplication table from 1 to 10.

Example for 5:

```text
5 x 1 = 5
5 x 2 = 10
...
5 x 10 = 50
```

---

## Topic 9 — Replacing `for` with `while`

### Concept

A `for` loop can be rewritten as a `while` loop.

For loop:

```javascript
for (let i = 0; i < 3; i++) {
    console.log(`number ${i}!`);
}
```

Equivalent `while` loop:

```javascript
let i = 0;

while (i < 3) {
    console.log(`number ${i}!`);
    i++;
}
```

### Exercises

**22. Rewrite `for` as `while`**

Rewrite:

```javascript
for (let i = 0; i < 3; i++) {
    console.log(`number ${i}!`);
}
```

using a `while` loop.

**Additional Practice:** Rewrite `for (let i = 10; i >= 1; i--)` using `while`.

---

## Topic 10 — Input Validation with Loops

### Concept

A loop can repeatedly ask for input until the user provides an acceptable value.

Example structure:

```javascript
let number;

while (condition) {
    number = readline.questionInt("Enter a number: ");
}
```

This is useful for validation.

### Exercises

**23. Repeat Until Number Is Greater Than 100**

Ask the user for a number. Keep asking until the user enters a number greater than 100.

When they finally enter a valid value, print:

```text
Valid number: 150
```

---

**24. Password Retry**

Ask the user for a password. Continue asking until they enter `TheMaster`.

When correct, display `Welcome!`.

**Additional Practice:** Allow only three attempts. After three failed attempts, display `Account locked`.

---

## Topic 11 — `break`

### Concept

`break` immediately exits a loop.

Example:

```javascript
for (let i = 1; i <= 10; i++) {
    if (i === 5) {
        break;
    }

    console.log(i);
}
```

Output:

```text
1
2
3
4
```

### Exercises

**25. Stop at a Number**

Print numbers from 1 to 100. Stop completely when the number reaches 25.

**Additional Practice:** Ask the user for a stopping number.

---

## Topic 12 — `continue`

### Concept

`continue` skips the current iteration and moves to the next one.

Example:

```javascript
for (let i = 1; i <= 5; i++) {
    if (i === 3) {
        continue;
    }

    console.log(i);
}
```

Output:

```text
1
2
4
5
```

### Exercises

**26. Skip Odd Numbers**

Print numbers from 1 to 20 using `continue` to skip odd numbers.

Expected:

```text
2
4
6
8
10
12
14
16
18
20
```

**Additional Practice:** Print numbers from 1 to 50 but skip multiples of 5.

---

## Topic 13 — Prime Numbers

### Concept

A prime number is greater than 1 and has no divisors other than 1 and itself.

Examples: 2, 3, 5, 7, 11, 13, ...

The `%` operator is useful:

```javascript
10 % 2
```

Result:

```text
0
```

meaning 10 is divisible by 2.

### Exercises

**27. Check Whether a Number Is Prime**

Ask the user for a number and determine whether it is prime.

**Additional Practice:** Improve the algorithm so that you only test divisors up to √n.

---

**28. Output Prime Numbers from 2 to N**

Ask the user for `n`. Print every prime number from 2 through n.

For `n = 10`, output:

```text
2
3
5
7
```

**Additional Practice:** Count how many prime numbers exist between 2 and n.

---

## Topic 14 — `switch`

### Concept

`switch` is useful when one value needs to be compared against several possible values.

Structure:

```javascript
switch (value) {
    case "A":
        // code
        break;

    case "B":
        // code
        break;

    default:
        // fallback
}
```

`break` prevents execution from continuing into the next case.

### Exercises

**29. Rewrite `switch` Using `if...else`**

Rewrite this `switch` using `if...else`:

```javascript
switch (browser) {
    case "Edge":
        console.log("You've got the Edge!");
        break;

    case "Chrome":
    case "Firefox":
    case "Safari":
    case "Opera":
        console.log("Okay we support these browsers too");
        break;

    default:
        console.log("We hope that this program looks ok!");
}
```

---

**30. Rewrite `if` Using `switch`**

Rewrite this using a single `switch`:

```javascript
let a = 2;

if (a === 0) {
    console.log(0);
}

if (a === 1) {
    console.log(1);
}

if (a === 2 || a === 3) {
    console.log("2,3");
}
```

---

## Topic 15 — Combined `switch` + Input

### Concept

Node.js terminal applications frequently combine user input, `switch`, and operators.

### Exercises

**31. Simple Calculator**

Ask the user for:

* First number
* Second number
* Operator (+, -, *, /, %, **)

Use `switch` to determine which operation to perform and display the result.

**Additional Practice:** Add division by zero prevention.

---

## Topic 16 — Functions

### Concept

A function is a reusable block of code.

Basic syntax:

```javascript
function greet() {
    console.log("Hello");
}
```

Call it:

```javascript
greet();
```

A function can receive parameters:

```javascript
function greet(name) {
    console.log(`Hello ${name}`);
}
```

Call:

```javascript
greet("John");
```

A function can return a value:

```javascript
function add(a, b) {
    return a + b;
}
```

Then:

```javascript
const result = add(10, 20);
```

### Exercises

**32. Function Without Parameters**

Create `showWelcome()` that prints `Welcome to JavaScript`. Call it three times.

**Additional Practice:** Create `showMenu()` that displays a simple CLI menu.

---

**33. Function With Parameters**

Create `greet(name)` that prints `Hello John` when called with `greet("John")`.

**Additional Practice:** Create `greet(name, city)` and produce `Hello John from Hyderabad`.

---

**34. Function With Return Value**

Create `add(a, b)` that returns the sum. Example: `add(10, 20)` should return 30.

**Additional Practice:** Create `subtract()`, `multiply()`, `divide()`.

---

## Topic 17 — `return` and Control Flow

### Concept

`return` immediately exits a function.

Example:

```javascript
function checkAge(age) {
    if (age > 18) {
        return true;
    }

    return false;
}
```

Once `return true;` runs, the function stops.

### Exercises

**35. Is `else` Required?**

Compare two versions:

```javascript
function checkAge(age) {
    if (age > 18) {
        return true;
    } else {
        return false;
    }
}
```

with:

```javascript
function checkAge(age) {
    if (age > 18) {
        return true;
    }

    return false;
}
```

Test both with 10, 18, 19, 25 and determine whether `else` changes the behavior.

---

## Topic 18 — Functions + Conditional Operator

### Concept

A function can return the result of a ternary expression.

Example:

```javascript
function checkAge(age) {
    return age >= 18 ? true : false;
}
```

### Exercises

**36. Rewrite a Function Using `?`**

Rewrite:

```javascript
function checkAge(age) {
    if (age > 18) {
        return true;
    } else {
        return false;
    }
}
```

using the conditional operator.

---

## Topic 19 — Functions + Logical OR

### Concept

`||` can be used to choose a fallback value.

Example:

```javascript
const name = input || "Guest";
```

### Exercises

**37. Rewrite a Function Using `||`**

Create:

```javascript
function getName(name) {
    // return "Guest" when name is empty/falsy
}
```

Use `||`.

---

## Topic 20 — Function Expressions

### Concept

A function can be stored in a variable.

Function expression:

```javascript
const greet = function () {
    console.log("Hello");
};
```

### Exercises

**38. Rewrite as a Function Expression**

Convert:

```javascript
function greet(name) {
    return `Hello ${name}`;
}
```

into a function expression.

---

## Topic 21 — Arrow Functions

### Concept

Arrow functions provide a shorter function syntax.

Normal function:

```javascript
function double(n) {
    return n * 2;
}
```

Arrow function:

```javascript
const double = n => n * 2;
```

### Exercises

**39. Rewrite Using Arrow Functions**

Rewrite:

```javascript
const greet = function (name) {
    return `Hello ${name}`;
};
```

as an arrow function.

---

**40. Arrow Function: Expression vs Block**

Create two functions that both double a number using:

1. Expression body: `n => expression`
2. Block body: `n => { return expression; }`

---

## Topic 22 — `min(a, b)`

### Concept

Functions become useful when the same logic needs to be reused with different values.

### Exercises

**41. Function `min(a, b)`**

Write `min(a, b)` that returns the smaller number.

Examples:

```javascript
min(2, 5)    // 2
min(3, -1)   // -1
min(1, 1)    // 1
```

**Additional Practice:** Create `max(a, b)` and `minOfThree(a, b, c)`.

---

## Topic 23 — `pow(x, n)`

### Concept

A function can combine parameters, loops, and return values.

### Exercises

**42. Function `pow(x, n)`**

Write `pow(x, n)` that returns `x` raised to the power `n`.

Examples:

```javascript
pow(3, 2)  // 9
pow(3, 3)  // 27
pow(1, 100) // 1
```

Do not use `Math.pow()` or `**`. Use a loop.

**Additional Practice:** Ask the user for `x` and `n` from the terminal and display the result.

---

## Topic 24 — Functions + Loops + Conditions

### Concept

Combine function, for loop, if statement, comparison, and return.

### Exercises

**43. Count Even Numbers**

Create `countEven(start, end)` that counts how many even numbers exist between `start` and `end`.

Example: `countEven(1, 10)` should return 5.

**Additional Practice:** Create `countOdd(start, end)`.

---

## Topic 25 — Functions + Prime Numbers

### Exercises

**44. Create `isPrime(number)`**

Create `isPrime(number)` that returns `true` for prime numbers and `false` for non-prime numbers.

Test with: 2, 3, 4, 5, 10, 17.

**Additional Practice:** Use `isPrime()` to solve Exercise 28.

---

## Topic 26 — Combined CLI Program

### Concept

A real Node.js program combines multiple concepts into a cohesive application.

### Exercises

**45. Student Grade Calculator**

Create a CLI program that asks for marks and returns a grade:

```text
90–100 → A
80–89  → B
70–79  → C
60–69  → D
Below 60 → F
```

Create function `getGrade(marks)` that returns the grade.

**Additional Practice:** Expand grading ranges.

---

## Topic 27 — Combined Calculator

### Exercises

**46. Function-Based Calculator**

Create separate functions: `add(a, b)`, `subtract(a, b)`, `multiply(a, b)`, `divide(a, b)`, `remainder(a, b)`, `power(a, b)`.

Create a CLI menu:

```text
1. Add
2. Subtract
3. Multiply
4. Divide
5. Remainder
6. Power
```

Use `switch` to call the correct function.

---

## Topic 28 — Loop + Function + Input

### Exercises

**47. Number Analyzer**

Create a CLI program that repeatedly asks the user for numbers. For every number, display:

* Positive / Negative / Zero
* Even / Odd
* Prime / Not Prime

Create functions: `getSign(number)`, `isEven(number)`, `isPrime(number)`.

**Additional Practice:** Add absolute value, square, and cube functions.

---

## Topic 29 — Final Combined Challenge

### Exercises

**48. CLI ATM Simulator**

Build a terminal-based ATM program with starting balance of ₹10,000.

Menu:

```text
1. Check Balance
2. Deposit
3. Withdraw
4. Exit
```

Implement validation and suggested functions: `showBalance()`, `deposit(amount)`, `withdraw(amount)`, `showMenu()`.

**Additional Practice:** Add transaction count, last transaction amount, and maximum withdrawal limit.

---

## Topic 30 — Final Master Challenge

### Exercises

**49. Number Guessing Game — Node.js Edition**

Create a terminal-based number guessing game where:

* The program chooses a number between 1 and 100
* The player repeatedly guesses
* Display "Too high" or "Too low" after each guess
* Display "Correct! You guessed it in 7 attempts" when correct

Suggested functions: `generateNumber()`, `checkGuess(guess, target)`.

**Additional Practice:** Add difficulty levels (Easy 1–50, Medium 1–100, Hard 1–500) and maximum attempt limits.

---

## Final Review Checklist

Before moving to the next JavaScript topic, you should be able to explain and use:

### Comparisons
- [ ] `>`
- [ ] `<`
- [ ] `>=`
- [ ] `<=`
- [ ] `==`
- [ ] `!=`
- [ ] `===`
- [ ] `!==`

### Conditional Logic
- [ ] `if`
- [ ] `else`
- [ ] `else if`
- [ ] Nested conditions
- [ ] Ternary `? :`

### Logical Operators
- [ ] `&&`
- [ ] `||`
- [ ] `!`
- [ ] Short-circuit evaluation

### Loops
- [ ] `while`
- [ ] `for`
- [ ] Initialization
- [ ] Condition
- [ ] Update
- [ ] Prefix increment
- [ ] Postfix increment
- [ ] `break`
- [ ] `continue`
- [ ] Nested loops

### `switch`
- [ ] `switch`
- [ ] `case`
- [ ] `break`
- [ ] `default`
- [ ] Multiple cases sharing one block

### Functions
- [ ] Function declaration
- [ ] Parameters
- [ ] Arguments
- [ ] `return`
- [ ] Early return
- [ ] Function expression
- [ ] Arrow function
- [ ] Expression-body arrow function
- [ ] Block-body arrow function

### Combining Concepts
- [ ] Functions + conditions
- [ ] Functions + loops
- [ ] Functions + `switch`
- [ ] Functions + user input
- [ ] Loops + conditions
- [ ] Nested loops
- [ ] CLI programs

---

## Student Rule for Every Exercise

For every question, follow this order:

```text
1. Read the question
2. Identify the input
3. Identify the expected output
4. Identify the JavaScript concepts required
5. Write the logic in plain English
6. Write the code
7. Predict the output
8. Run the program
9. Test at least 3 different inputs
10. Explain your solution
```

### Most Important Rule

**Do not memorize the solution. Understand the flow.**

When reading code, always ask:

```text
What is the input?
        ↓
What variables store it?
        ↓
What condition is being checked?
        ↓
What happens if TRUE?
        ↓
What happens if FALSE?
        ↓
Does the code repeat?
        ↓
When does the repetition stop?
        ↓
What value does the function return?
        ↓
What finally gets printed?
```

That reasoning pattern is more important than memorizing individual JavaScript syntax.

---

## Summary

This exercise set covers core JavaScript fundamentals:

| Topic | Exercises | Key Concepts |
|-------|-----------|---------------|
| Comparisons | 01–03 | Comparison operators, `==` vs `===` |
| Conditionals | 04–06 | `if`, `else if`, `else` |
| Ternary Operator | 07–08 | `? :` conditional operator |
| Multiple Conditions | 09 | Nested ternary operators |
| Logical Operators | 10–13 | `&&`, `||`, `!`, short-circuit evaluation |
| Combined Logic | 14–15 | Comparisons + logical operators |
| `while` Loops | 16–17 | Loop structure, prefix/postfix operators |
| `for` Loops | 18–21 | Loop initialization, condition, update |
| `for` to `while` | 22 | Loop equivalence |
| Input Validation | 23–24 | Loops for validation |
| `break` | 25 | Exit loop early |
| `continue` | 26 | Skip iteration |
| Prime Numbers | 27–28 | Divisibility, nested loops |
| `switch` | 29–30 | `switch...case...default` |
| `switch` + Input | 31 | Interactive programs |
| Functions | 32–34 | Declaration, parameters, return |
| `return` Flow | 35 | Early return, control flow |
| Functions + Ternary | 36 | Conditional returns |
| Functions + OR | 37 | Fallback values |
| Function Expressions | 38 | Functions as values |
| Arrow Functions | 39–40 | Modern function syntax |
| `min(a, b)` | 41 | Comparison in functions |
| `pow(x, n)` | 42 | Loops in functions |
| Functions + Loops + Conditions | 43 | Complex logic |
| Functions + Primes | 44 | Algorithm implementation |
| Combined CLI | 45 | Complete program |
| Calculator | 46 | Menu-driven application |
| Number Analyzer | 47 | Multi-function program |
| ATM Simulator | 48 | Real-world application |
| Guessing Game | 49 | Interactive game logic |

**Total Exercises:** 49

---

## Tips for Success

- Start with simpler exercises and progress to complex ones
- Test your code in the terminal using Node.js
- Don't just write code; understand *why* it works
- Review the concept explanation before starting each topic
- Use `console.log()` for debugging and displaying results
- Practice regularly and revisit difficult concepts
- Follow the 10-step student rule for every exercise

---

## Getting Help

- Review the topic explanation if confused
- Search for similar examples in MDN Web Docs or online resources
- Discuss with instructor if stuck
- Test incrementally: write and test small pieces of code
- Use the Final Review Checklist to identify gaps

---

**Last Updated:** 11 September 2026  
**Created for:** Miss Shagufta Fatima
