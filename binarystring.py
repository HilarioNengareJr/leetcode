"""
Given a binary string s and an integer k, return true if every binary code of length k is a substring of s. Otherwise, return false.

Check If a String Contains All Binary Codes of Size K.
"""

class Solution(object):
    
    def hasAllCodes(self, s, k):
        truth_table = set()
        strg = eval(s)
        
        for i in range(len(s) - k+1):
            truth_table.add(s[i:i+k])
        
        print(truth_table)
        
        return len(truth_table)==2**k
