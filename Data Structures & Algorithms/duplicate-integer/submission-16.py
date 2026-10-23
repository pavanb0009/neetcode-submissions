class Solution:
    def hasDuplicate(self, nums: List[int]) -> bool:
        convertToSet = set(nums)
        return len(convertToSet) != len(nums)