"""
Write a function that takes an unsigned integer and returns the number of '1' bits it has (also known as the Hamming weight).

EXAMPLE
Input: n = 00000000000000000000000000001011
Output: 3
Explanation: The input binary string 00000000000000000000000000001011 has a total of three '1' bits.
"""

def hammingWeight(n):
    try: 
        assert n > 0 
    except AssertionError :
        print("Number is negative")
        return
        
    #lambda to convert our integer to a 32 bit string
    lambda_for_n = lambda n, x: format(n, 'b').zfill(x)
    n = str(lambda_for_n(n,32))
    
    count = 0 #for keeping count of the 1s
    for i in n:
        if i == '1':
            count+=1
    print(n)
            
    return count
    
print(hammingWeight(69))
     
            
        
        


