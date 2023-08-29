class Solution:
    def twoSum(self, nums, target):
        i = 0
        j = len(nums) - 1
        result = []

        while nums[i] + nums[j] != target:
            if nums[i] + nums[j] < target:
                i += 1
            else:
                j -= 1

        result.append(i)
        result.append(j)
        return result


nums = [3, 2, 4]
solution = Solution()
print(solution.twoSum(nums, 6))
