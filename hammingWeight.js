function hammingWeight(n){
    n = n.toString(2)
    let count = 0
    
    for(let i=0; i<n.length; i++)
    {
        if (n[i] == "1"){
            count++
        }
    }
    return count
}

let x = hammingWeight(1)
console.log(x)
