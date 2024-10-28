function maxSubArray(ar_, k){
    // [4,5,6,8,2,7,2,7,9]
    let maxSum = Number.MIN_VALUE;
    let currentRunningSum = 0;
    
    for(let j = 0; j < k; j++){
        currentRunningSum += ar_[j];
    }

    maxSum = currentRunningSum;
    
    for(let i = k; i < ar_.length; i++){
        // remove element on the far left and add element on the right
        currentRunningSum += ar_[i] - ar_[i - k]; 
        // update maximum sum
        maxSum = Math.max(currentRunningSum, maxSum);
        
    } 
    
    return maxSum;
}

console.log(maxSubArray([4,5,6,8,2,7,2,7,9], 3));
