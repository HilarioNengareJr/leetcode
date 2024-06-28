
/*
Given two strings, write a method to decide if one is a permutation of the
other.
*/

function isPermutation(str1, str2){
    
    // Big O(n space complexity)
    let obj = new Object(); 
    
    // if not equal size its not permutation
    if(str1.length !== str2.length){
        return false;
    }
    
    // count elements and store in an object
    for(let i = 0; i < str1.length; i++)
    {
        let temp = str1[i];
        // if value is undefined resolve to 0 and add 1 else increase by 1
        obj[temp] = (obj[temp] || 0) + 1;
    }
    
    // comparing the characcters
    for(let char of str2){
        
        if(!char in obj){
            return false;
        }
        
        // per char found decrease frequency
        obj[char]--;
        
        // if there are more occurences of char in str2 over str1
        if(obj[char] < 0){
            return false;
        }
        
    }
    
    // Big O(n) since lookup and insertion is O(1) time
    return true;
    
}

console.log(isPermutation('aab','abb')) // false
console.log(isPermutation('aab','aba'))// true
