function formattedNumber(strArr) {
    let num = strArr[0];

    // Regular expression to validate the number format:
    // - Start with optional digits (with properly placed commas every 3 digits)
    // - Allow an optional decimal point followed by exactly two digits
    let regex = /^(\d{1,3})(,\d{3})*(\.\d{2})?$/;

    // Test if the number matches the regular expression
    if (regex.test(num)) {
        return "true";
    } else {
        return "false";
    }
}

// Example usage:
console.log(formattedNumber(["1,093,222.04"]));  // Output: "true"
console.log(formattedNumber(["1,093,22.04"]));   // Output: "false"
