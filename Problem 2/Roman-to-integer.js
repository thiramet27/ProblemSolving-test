function romanToInt(s) {
    let total = 0;    
    for (let i = 0; i < s.length; i++) {
        let current = 0;
        if (s[i] === 'I') {
            current = 1;
        } else if (s[i] === 'V') {
            current = 5;
        } else if (s[i] === 'X') {
            current = 10;
        } else if (s[i] === 'L') {
            current = 50;
        } else if (s[i] === 'C') {
            current = 100;
        } else if (s[i] === 'D') {
            current = 500;
        } else if (s[i] === 'M') {
            current = 1000;
        }
        let next = 0;
        if (i + 1 < s.length) {
            if (s[i + 1] === 'I') {
                next = 1;
            } else if (s[i + 1] === 'V') {
                next = 5;
            } else if (s[i + 1] === 'X') {
                next = 10;
            } else if (s[i + 1] === 'L') {
                next = 50;
            } else if (s[i + 1] === 'C') {
                next = 100;
            } else if (s[i + 1] === 'D') {
                next = 500;
            } else if (s[i + 1] === 'M') {
                next = 1000;
            }
        }
        if (current < next) {
            total -= current;
        } else {
            total += current;
        }
    }
    return total;
}

// Example usage:
console.log(romanToInt("III"));      // Output: 3
console.log(romanToInt("LVIII"));    // Output: 58
console.log(romanToInt("MCMXCIV"));  // Output: 1994
