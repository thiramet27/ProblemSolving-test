var rotateString = function(s, goal) {
    //check if it not the same length as constraints
    if (s.length !== goal.length) {
        return false;
    }
    // result of s + s , shiftcheck = "abcdeabcde" now we got all positions that possible
    // 0 shift                        "abcde"
    // 1 shift                         "bcdea"
    // 2 shift                          "cdeab"
    // 3 shift                           "deabc"
    // 4 shift                            "eabcd"
    // then you will saw that all shift is a substring of s + s
    let shiftcheck = s + s ;

    return shiftcheck.includes(goal);

};

// Example usage:
console.log(rotateString("abcde", "cdeab")); // Output: true
console.log(rotateString("abcde", "abced")); // Output: false