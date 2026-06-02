class Solution {
public:
    vector<int> getConcatenation(vector<int>& nums) {
        int n = nums.size();
        
        // Pre-size the vector to exactly 2 * n. 
        // This allocates all required memory on the Heap instantly in a single operation.
        vector<int> ans(2 * n);
        
        // Single pass optimization
        for (int i = 0; i < n; ++i) {
            ans[i] = nums[i];     // Fills the first half
            ans[i + n] = nums[i]; // Fills the second half
        }
        
        return ans;
    }
};