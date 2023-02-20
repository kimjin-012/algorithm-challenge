// https://leetcode.com/problems/running-sum-of-1d-array/?envType=study-plan&id=level-1
public class Solution {
    public int[] RunningSum(int[] nums) {
        int count = 0;
        List<int> sums = new List<int>();
        for(int i = 0; i < nums.Length; i++)
        {
            count += nums[i];
            sums.Add(count);
        }
        return sums.ToArray();
    }
}

public class Solution2 
{
    public int[] RunningSum(int[] nums)
    {
        for (int i = 1; i < nums.Length; ++i) 
        {
            nums[i] += nums[i - 1]; 
        }
        return nums;
    }
}