/* 
Given a SORTED array of integers, dedupe the array 
Because array elements are already in order, all duplicate values will be grouped together.
Ok to use a new array
Bonus: do it in O(n) time (no nested loops, new array ok)
Bonus: Do it in-place (no new array)
Bonus: Do it in-place in O(n) time and no new array
Bonus: Keep it O(n) time even if it is not sorted
*/

const nums1 = [1, 1, 1, 1];
const expected1 = [1];

const nums2 = [1, 1, 2, 2, 3, 3];
const expected2 = [1, 2, 3];

const nums3 = [1, 1, 2, 3, 3, 4];
const expected3 = [1, 2, 3, 4];

function dedupeSorted(nums) {
    var check = {};
    for (var i=nums.length-1; i>=0; i--){
        if(nums[i] in check){
            nums.splice(i,1);
            console.log(nums)
        }
        if(!(nums[i] in check)){
            check[nums[i]] = 1;
        }
    }
    return nums;
}

console.log(dedupeSorted(nums3))


