/* 
    March 30
    Given an array of ints, find all the non-consecutive integers
    A number is non-consecutive if it is NOT exactly 1 larger than the previous element.
    The first element is never considered non-consecutive.
    Return an array of objects where each object contains the number itself
    and it's index.
    
    EXAMPLE:
    let arr = [1,3,4,5,6,8,9,11];

    allNonConsecutive(arr) should return:
    [
        { i: 1, n: 3 },
        { i: 5, n: 8 },
        { i: 7, n: 11 }
    ]
*/
function allNonConsecutive(sortedNums){
    var results = [];
    var objects = {};
    for(var i=1; i<sortedNums.length; i++){
        if((sortedNums[i] - sortedNums[i-1]) > 1){
            objects["i"] = i,
            objects["n"] = sortedNums[i]
            results.push(objects);
            objects = {};
        }
    }
    return results;
}
let arr = [1,3,4,5,6,8,9,11];
console.log(allNonConsecutive(arr))