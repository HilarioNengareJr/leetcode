
/*
Given a string, write a function to check if it is a permutation of a palin­drome. A palindrome is a word or phrase that is the same forwards and backwards. A permutation
is a rearrangement of letters. The palindrome does not need to be limited to just dictionary words.

example use case:

Tact Coa

Output:True (permutations: "taco cat", "atco eta", etc.)

characteristics of a pali: has one odd number of chars.

*/

function isPalindromePermutation(str1){
    
    // object to store char count should have at least 1 odd char and even number of all the other
    const obj = {};
    
    // remove spaces and turn to lower case
    let str = str1.replace(' ', '').toLowerCase();
    
    // count each letter
    for(let char of str){
        obj[char] = (obj[char] || 0) + 1;
    }
    
    let oddCount = 0;
    
    // check if we have 1 odd char
    for(let count of Object.values(obj)){
        if(count % 2 !== 0){
            oddCount++;
        }
    }
    
    console.log(oddCount);
    console.log(Object.values(obj)); // returns an array
    console.log(obj);
    console.log(str);
    if(oddCount > 1){
        return false;
    }
    
    return true;
}

console.log(isPalindromePermutation('Tact Coa'))

