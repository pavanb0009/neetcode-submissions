class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums: number[]): boolean {
        const n = nums.length;
        const setn =new Set(nums)

        if(setn.size == n){
            return false
        }else{
            return true
        }
    }
}
