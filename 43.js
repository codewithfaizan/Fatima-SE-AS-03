function countEven(start, end) {
    let count = 0;
    for (let i = start; i <= end; i++) {
        if (i % 2 === 0) {
            count++;
        }
    }
    return count;
}

console.log(countEven(1, 10)); 

// 5