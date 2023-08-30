class Solution:
    def twoSum(self, nums, target):
        nums_sorted = [(num, index) for index, num in enumerate(nums)]
        nums_sorted.sort()
        print(nums_sorted)
        i , j = 0, len(nums_sorted)-1

        while nums_sorted[i][0] + nums_sorted[j][0] != target:
            if nums_sorted[i][0] + nums_sorted[j][0] < target:
                i += 1
            else:
                j -= 1

        return [nums_sorted[i][1], nums_sorted[j][1]]

nums = [-1,-2,-3,-4,-5]
solution = Solution()
print(solution.twoSum(nums, -8))
