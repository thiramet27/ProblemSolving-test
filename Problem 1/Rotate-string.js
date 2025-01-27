var rotateString = function(s, goal) {
    return s.length === goal.length && (s + s).includes(goal)
};

// Example usage:
console.log(rotateString("abcde", "cdeab")); // Output: true
console.log(rotateString("abcde", "abced")); // Output: false
