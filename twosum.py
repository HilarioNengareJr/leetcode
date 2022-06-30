
"""
Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.
"""

def twoSum(nums,target):
     for i in nums:
            for j in nums:
                if nums.index(i) != nums.index(j) and i + j == target:
                    return nums.index(i), nums.index(j)
                    
n = [3,2,4]
t = 6

print(twoSum(n,t))
