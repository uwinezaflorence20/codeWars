function validatePhoneNumber(str) {
    // Remove all spaces and dashes to count digits
    const digitsOnly = str.split('').filter(c => c >= '0' && c <= '9').join('');

    // Must have exactly 10 digits
    if (digitsOnly.length !== 10) return false;

    // If separators exist, check their positions
    if (str.length === 12) { // two separators
        if (!((str.charAt(3) === '-' || str.charAt(3) === ' ') &&
              (str.charAt(7) === '-' || str.charAt(7) === ' '))) {
            return false;
        }
    } else if (str.length !== 10) { // any other length (like 11, 13) is invalid
        return false;
    }

    return true;
}

// Test cases
console.log(validatePhoneNumber("1234567890"));    // true
console.log(validatePhoneNumber("123-456-7890"));  // true
console.log(validatePhoneNumber("123 456 7890"));  // true
console.log(validatePhoneNumber("123-45-67890"));  // false
console.log(validatePhoneNumber("1234-567890"));   // false
