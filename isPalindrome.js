/**
A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.

Given a string s, return true if it is a palindrome, or false otherwise.
 */
var isPalindrome = function(s){
    
    // transforming the string to lowercase
    s = s.toLowerCase().replace(/[^a-zA-Z0-9]/g, '');
    
    // using 2 pointers 
    let left = 0;
    let right = s.length - 1;

    while(left < right){
        // return false if mismatch is found
        if(s[left] !== s[right]){
            return false;
        }

        left ++;
        right --;
    }
    
    // return true if it checks out
    return true;
}
