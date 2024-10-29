/*
You are given two non-empty linked lists representing two non-negative integers.
The digits are stored in reverse order, and each of their nodes contains a single digit. 
Add the two numbers and return the sum as a linked list.

You may assume the two numbers do not contain any leading zero, except the number 0 itself.
*/





function addTwoNumbers(lst1, lst2) {
    let currentRunningSum = 0;
    let result = [];   // storage for the result sum
    let carry = 0;     // to handle carry over when sum > 9
    let k = lst1.length - 1;
    let j = lst2.length - 1;
    
    // first case scenario where array lengths are the same
    if (lst1.length === lst2.length) {
        for (let i = k; i >= 0; i--) {
            // Add the corresponding digits and carry
            currentRunningSum = lst1[i] + lst2[i] + carry;
            
            // If the sum exceeds 9, set carry and calculate the result digit
            carry = Math.floor(currentRunningSum / 10);
            result.push(currentRunningSum % 10);  // Push remainder to result
        }
    } 
    // second case scenario where array lengths are different
    else {
        while (k >= 0 || j >= 0 || carry > 0) {
            // Add the digits from both lists and carry
            let sum = carry;
            if (k >= 0) sum += lst1[k];
            if (j >= 0) sum += lst2[j];
            
            // Calculate new carry and result digit
            carry = Math.floor(sum / 10);
            result.push(sum % 10);
            
            // Move to the next digits
            if (k >= 0) k--;
            if (j >= 0) j--;
        }
    }
    
    return result.reverse();  // Reverse the result to get the correct order
}

// Test cases
console.log(addTwoNumbers([2, 4, 2], [5, 6, 4]));  // Output: [7, 0, 7]
console.log(addTwoNumbers([2, 3, 6, 3], [5, 6, 4]));  // Output: [2, 9, 2, 7]
