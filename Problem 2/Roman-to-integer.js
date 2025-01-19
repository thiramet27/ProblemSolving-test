function romanToInt(s) {
    const romanToIntTable = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000
    };

    let total = 0;
    let previousValue = 0;

    for (let i =s.length - 1; i  >=0; i--) {
        const currentValue = romanToIntTable[s[i]];
    

    if (currentValue < previousValue) {
        total -= currentValue;
    } else {
        total += currentValue;
    }
    previousValue = currentValue
    };
    
    return total;

}

// Example usage:
console.log(romanToInt("III"));      // Output: 3
console.log(romanToInt("LVIII"));    // Output: 58
console.log(romanToInt("MCMXCIV"));  // Output: 1994