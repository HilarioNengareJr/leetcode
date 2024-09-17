/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function(nums) {
    // Initialize the variables with the first element of the array
    let maxProd = nums[0];
    let minProd = nums[0];
    let result = nums[0];

    // Loop through the array starting from the second element
    for (let i = 1; i < nums.length; i++) {
        // If the current number is negative, swap the max and min products
        if (nums[i] < 0) {
            [maxProd, minProd] = [minProd, maxProd];
        }

        // Calculate the new max and min products
        maxProd = Math.max(nums[i], maxProd * nums[i]);
        minProd = Math.min(nums[i], minProd * nums[i]);

        // Update the result with the largest product found so far
        result = Math.max(result, maxProd);
    }

    // Return the largest product found
    return result;
};

// Example usage
let nums = [2, 3, -2, 4];
console.log(maxProduct(nums)); // Output: 6
