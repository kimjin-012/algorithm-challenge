/*
    Given an array of integers, return indices of the two numbers such that they add up to a specific target.
    You may assume that each input would have exactly one solution, and you may not use the same element twice.
    Bonus: Make it O(n) time

    EXAMPLE:
    let arr = [2, 11, 7, 15];
    let target = 9;

    twoSum(arr, target) should return [0, 2] (or [2,0], the order of the output is irrelevant) because 
    nums[0] + nums[2] => 2 + 7 = 9, which is our target
*/
function twoSum(nums, targetSum){
    var test = 0;
    var active = 0;
    var results = [];
    for(var i=active+1; i<nums.length; i++){
        test = nums[active] + nums[i];
        console.log(test);
        if(test !== targetSum){
            if(i == nums.length - 1){
                active++;
                if(active == nums.length - 1){
                    console.log('nah')
                }
            }
        } else if(test == targetSum){
            results.push(active);
            results.push(i)
            return results;
        }
    }
    return results;
}
let arr = [2, 11, 7, 15];
let target = 9;
console.log(twoSum(arr,target))