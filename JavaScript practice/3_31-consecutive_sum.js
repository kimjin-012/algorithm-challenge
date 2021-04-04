/* 
    You are given a list of integers. Find all the consecutive sets of 
    integers that adds up to the sum passed in as one of the inputs.

    EXAMPLE:
    let arr = [2, 5, 3, 6, 7, 23, 12];
    let targetSum = 16;

    findConsqSums(arr, targetSum) should return:
    [
        [2, 5, 3, 6],
        [3, 6, 7]
    ] 
*/
function findConsqSums(nums, sum){
    var sums = 0;
    var test = [];
    var results = [];
    var start = 0;
    for(var i=start; i<nums.length; i++){
        sums += nums[i];
        if(sums > sum){
            start++;
            i = start;
            sums = 0;
            test = [];
        }
        else{
            test.push(nums[i])
        }
        if(sums == sum){
            results.push(test);
        }
    }
    return results;
}

let arr = [2, 5, 3, 6, 7, 23, 12];
let targetSum = 16;
console.log(findConsqSums(arr, targetSum))
