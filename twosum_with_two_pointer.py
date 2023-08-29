class Solution(object):
    def twoSum(self, nums, target):
        self.nums = nums
        self.target = target

        i = 0
        j = len(self.nums) - 1
        result = []

        while i < j:
            if self.nums[i] + self.nums[j] == self.target:
                result.append(i)
                result.append(j)
                return (result)
            elif self.nums[i] + self.nums[j] > self.target:
                j -= 1
            else:
                i += 1
        return None
    
s = Solution()
nums = [2,7,11,15]
print(s.twoSum(nums, 9))
