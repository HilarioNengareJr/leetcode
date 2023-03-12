class Solution:
    def search(self, nums,target):
        # necessary variables
        self.nums = nums
        self.target = target
        h = len(nums)-1
        l = 0
        
        # testing the base condition
        while h >= l:
            m = (h+l) // 2
            # if mid element is less than target check right subarray
            if (self.nums[m] < self.target):
                l = m+1
            # if mid element is greater than target element check the left subarray
            elif (self.nums[m] > self.target):
                h = m-1
            # else the target element is equal to the mid element then return that index
            else:
                return m
        return -1
    
def main():
    obj = Solution()
    arr = [11,12]
    target = 12
    # print the return index of the target element
    print(obj.search(arr,target))
    
if __name__ == "__main__":
    main()
