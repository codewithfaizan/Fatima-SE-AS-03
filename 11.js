function first() {
    console.log("first");
    return true;
}

function second() {
    console.log("second");
    return true;
}
console.log(first() || second());

// first
// true