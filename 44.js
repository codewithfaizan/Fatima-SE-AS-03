function isPrime(number) {
    if (number < 2) {
        return false; // numbers less than 2 are never prime
    }

    for (let i = 2; i <= Math.sqrt(number); i++) {
        if (number % i === 0) {
            return false; 
        }
    }
    return true; 
    
}


// used AI 
// console.log(isPrime(2));  
// console.log(isPrime(4));  
// console.log(isPrime(10));