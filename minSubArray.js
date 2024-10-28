function minSubArraySum(ar_) {
    let minSum = ar_[0];
    let currentRunningMinSum = ar_[0];
    
    for (let i = 1; i < ar_.length; i++) {
        // Either add the current element to the current sum or start a new sum
        currentRunningMinSum = Math.min(ar_[i], currentRunningMinSum + ar_[i]);
        
        // Update the minimum sum if the current subarray sum is smaller
        minSum = Math.min(currentRunningMinSum, minSum);
    }
    
    return minSum;
}

console.log(minSubArraySum([4, 5, 6, 8, 2, 7, 2, 7, 9])); 
