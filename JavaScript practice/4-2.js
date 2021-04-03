/* 
    Given an unsorted non-empty array of integers and int k, return the k most frequent elements (in any order)
    You can assume there is always a valid solution
    These example inputs are sorted for readability, but the input is NOT guaranteed to be sorted and the output does NOT need to be in any specific order
    Hard Bonus: make it O(n) time

    EXAMPLE:
    let arr1 = [0,0,0,2,2,3];
    let k1 = 1;

    kMostFrequent(arr1,k1) should return [0]

    let arr2 = [1,1,1,2,2,3];
    let k2 = 2

    kMostFrequent(arr2, k2) should return [1, 2]
*/
function kMostFrequent(nums, k){
    var objects = {};
    var biggest = 0;
    var location = 0;
    var results = [];
    for(var i = 0; i < nums.length; i++){
        if(nums[i] in objects){
            objects[nums[i]] += 1;
        }
        else{
            objects[nums[i]] = 1;
        }
    }
    for(var j=0; j<objects.length; j++){
        biggest = objects[0];
        if(objects[j] >= biggest){
            biggest = objects[j];
            location = j;
        }
    }
    return results.push()
}
// let arr1 = [0,0,0,2,2,3];
// let k1 = 1;
// console.log(kMostFrequent(arr1, k1));