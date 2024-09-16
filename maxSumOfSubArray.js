function maxSumSubArray(arr){
    
    let maxSoFar = 0;
    let maxEndingHere = -Infinity;
    
    for(let i = 0; i < arr.length-1 ; i++){
        maxEndingHere = Math.max(arr[i], maxEndingHere + arr[i]);
        maxSoFar = Math.max(maxSoFar, maxEndingHere);
    }
    
    return maxSoFar;
}


nums = [-2,1,-3,4,-1,2,1,-5,4]

console.log(maxSumSubArray(nums));
