'''
You are given two strings word1 and word2. Merge the strings by adding letters in alternating order, starting with word1. If a string is longer than the other, append the additional letters onto the end of the merged string.

Return the merged string.

 

Example 1:

Input: word1 = "abc", word2 = "pqr"
Output: "apbqcr"
Explanation: The merged string will be merged as so:
word1:  a   b   c
word2:    p   q   r
merged: a p b q c r

'''
class Solution(object):
    def mergeAlternately(self, word1, word2):
        """
        :type word1: str
        :type word2: str
        :rtype: str
        """
        self.word1 = word1
        self.word2 = word2
        self.merged_word = list()
        i = 0

        while i < len(self.word1) or i < len(self.word2):
            if i < len(self.word1):
                self.merged_word.append(self.word1[i])
            if i < len(self.word2):
                self.merged_word.append(self.word2[i])
            i += 1
        
        self.merged_word = ''.join(self.merged_word)
        return self.merged_word
