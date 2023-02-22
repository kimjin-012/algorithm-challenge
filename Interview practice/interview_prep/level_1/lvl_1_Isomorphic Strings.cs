// https://leetcode.com/problems/isomorphic-strings/?envType=study-plan&id=level-1
public class Solution {
    public bool IsIsomorphic(string s, string t) {
        Dictionary<char, char> dic = new Dictionary<char, char>();
        HashSet<char> has = new HashSet<char>();

        for(int i = 0; i < s.Length; i++)
        {
            if(dic.ContainsKey(s[i]))
            {
                if(dic[s[i]] != t[i])
                {
                    return false;
                }
            }
            else
            {
                if(has.Contains(t[i]))
                    return false;

                dic.Add(s[i], t[i]);
                has.Add(t[i]);
            }
        }
        return true;
    }
}