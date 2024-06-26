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


// Using set data structure

/**
 *  using a set which holds unique elements
 **/
 
function isUnique(str){
    let charSet = new Set();
    
    for(let elm of str){
        // if a set contains the element we are trying to add then we return false
        if(charSet.has(elm)){
            return false;
        }
        
        charSet.add(elm);
    }
    
    // means string is unqiue
    return true;
}

console.log(isUnique('Hilaro')); // true
console.log(isUnique('Hilario')); // false
