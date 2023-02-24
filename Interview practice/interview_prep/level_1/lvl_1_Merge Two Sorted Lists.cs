// https://leetcode.com/problems/merge-two-sorted-lists/description/
/**
 * Definition for singly-linked list.
 * public class ListNode {
 *     public int val;
 *     public ListNode next;
 *     public ListNode(int val=0, ListNode next=null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */
public class Solution {
    public ListNode MergeTwoLists(ListNode list1, ListNode list2) {
            if (list1 == null)
                return list2;
            if (list2 == null)
                return list1;


            if (list2.val > list1.val)
            {
                list1.next = MergeTwoLists(list1.next, list2);

                return list1;
            }

            list2.next = MergeTwoLists(list1, list2.next);
            return list2;
    }
}