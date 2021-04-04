// Stable sort
/* 
    MERGE SORT
    Stable sort.
    Visualization:
    https://www.hackerearth.com/practice/algorithms/sorting/merge-sort/visualize/
    Time Complexity
        - Best case: O(n log(n)) linearithmic.
        - Average case: O(n log(n)) linearithmic.
        - Worst case: O(n log(n)) linearithmic.
    Space: O(n) linear
    steps:
        1. create a merge function to merge two already sorted arrays into a single
            sorted array.
        - you do NOT need to work in place, ok to use a new array
    EXAMPLE: merge([1,4,5], [2,3,6]) will return [1,2,3,4,5,6]
*/

function merge(nums1, nums2){
    var nums3 = [];
    var x = 0;
    var y = 0;
    for(let i = 0; i < nums1.length+nums2.length; i++){
        if(x <= nums1.length && y <= nums2.length && nums1[x] <= nums2[y]){
            nums3.push(nums1[x]);
            x++;
        } else if (x <= nums1.length && y <= nums2.length && nums1[x] > nums2[y]){
            nums3.push(nums2[y]);
            y++;
        } else if(x > nums1.length-1){
            nums3.push(nums2[y]);
            y++;
        } else {
            nums3.push(nums1[x]);
            x++;
        }
    }
    return nums3;
}

//----------------------------------------------------------------
function mergeSort(nums){
    if(nums.length <= 1){
        return nums;
    }
    let nums2 = [];
    let nums3 = [];
    for(let i = 0; i < nums.length; i++){
        if(i <= nums.length/2){
            nums2.push(nums[i]);
        } else {
            nums3.push(nums[i]);
        }
    }
    nums2 = mergeSort(nums2);
    nums3 = mergeSort(nums3);

    return merge(nums2, nums3);
}

console.log(mergeSort([3,6,9,3,1,6,4,2,8,9,3]))