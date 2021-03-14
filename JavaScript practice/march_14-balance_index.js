function balanceIndex(nums) {
    for(var i=1; i<nums.length; i++){
        var first = 0;
        var second = 0;
        console.log("i = "+ i)
        for(var j=0; j<i; j++){
            first += nums[j];
        }
        for(var x=nums.length-1; x>i; x--){
            second += nums[x];
        }
        if (first == second){
            return i;
        }
    }
    return -1;
}

var nums2 = [9, 9];
console.log(balanceIndex(nums2))
// expected2 = -1;

var nums1 = [-2, 5, 7, 0, 3];
console.log(balanceIndex(nums1))
// expected1 = 2;

