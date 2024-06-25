/* Implement an algorithm to determine if a string has all unique characters. What if you
cannot use additional data structures? */


// Brute Force

function isUnique(someString){
    
    let ptr = 0;
    
    while(ptr < someString.length){
        let endPtr = someString.length - 1;
        while(endPtr > ptr){
            if(someString[ptr] === someString[endPtr]){
                return false;
            }
            endPtr --;
        }
        ptr++;
    }
    
    return true; // produces Big O(n2)
}

console.log(isUnique('hilario'));
