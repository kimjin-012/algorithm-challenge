// https://leetcode.com/problems/is-subsequence/?envType=study-plan&id=level-1
public class Solution {
    public bool IsSubsequence(string s, string t) {
        if(s.Length < 1)
            return true;
        
        int k = 0;

        if(!t.Contains(s[0]))
            return false;   

        for(int i = 0; i < t.Length; i++)
        {
            if(t[i] == s[k])
                k++;
                
            if(k == s.Length)
                return true;
        }

        return false;
    }
}