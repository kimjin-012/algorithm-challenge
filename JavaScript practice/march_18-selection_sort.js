/* 
    https://www.hackerearth.com/practice/algorithms/sorting/bubble-sort/visualize/
    Stable sort
    Second exercise for the sorting, but this time the selection
*/

function selection(nums){
    for(var i=0; i<nums.length; i++){
        var small = i;
        for(var j=i+1; j<nums.length; j++){
            if(nums[small] > nums[j]){
                small = j;
            }
        }
        if(small !== i){
            var temp = nums[i];
            nums[i] = nums[small];
            nums[small] = temp;
        }
    }
    return nums;
}
console.log(selection([2,5,3,6,1,8]));