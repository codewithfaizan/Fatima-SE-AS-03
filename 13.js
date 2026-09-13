function first() {
    console.log("first");
    return true;
}

function second() {
    console.log("second");
    return false;
}

console.log(first() && second());

// first
// second
// false

function first() {
    console.log("first");
    return false;
}

function second() {
    console.log("second");
    return false;
}

console.log(first() && second());

// first
// false

