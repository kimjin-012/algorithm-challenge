// https://leetcode.com/problems/find-pivot-index/?envType=study-plan&id=level-1
public class Solution {
    public int PivotIndex(int[] nums) {
        if(nums.Length == 1) return 0;

        int Left = 0;
        int Right = nums.Skip(1).Sum();
        if(Left == Right)
            return 0;

        for(int i = 1; i < nums.Length; i++)
        {
            Left += nums[i-1];
            Right -= nums[i];

            if(Left == Right)
            {
                return i;
            }
        };
        return -1;
    }
}