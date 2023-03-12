class Solution:
    def search(self, nums,target):
        # necessary variables
        self.nums = nums
        self.target = target
        h = len(nums)-1
        l = 0
        
        # testing the base condition
        while h - l >= 1:
            m = (h+l) // 2
            # if mid element is less than target check right subarray
            if (self.nums[m] < self.target):
                l = m+1
            elif (self.nums[m] > self.target):
                h = m-1
            else:
                return m
        return -1

obj = Solution()
arr = [12]
target = 12
print(obj.search(arr,target))
