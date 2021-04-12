/*
    Input: arr, callback
    Output: arr (with elements removed)
    Remove every element in the array, starting from idx 0,
    until the callback function returns true when passed the
    iterated element.
    Return an empty array if the callback never returns true

    EXAMPLE:
    const nums = [1, 4, 3, 6, 9, 15];

    const callback1 = (elem) => {
        return elem > 5;
    };

    dropIt(nums, callback1) should return [6,9,15] because 6, 9, and 15 are the elements that,
    when passed into callback1, will result in the function returning true.
*/
function dropIt(arr, callback){
    return result = arr.filter(num => num > callback);
}
const nums = [1, 4, 3, 6, 9, 15];
const call = 5;
console.log(dropIt(nums,call));

const callback1 = (elem) => {
    return elem > 5;
};

function dropIt2(arr, callback1){
    for(var i=0; i<arr.length; i++){
        if(callback1(arr[i]) == false){
            arr.splice(i,1);
            i--;
        }
    }
    return arr;
}
const nums = [1, 4, 3, 6, 9, 15];
const call = 5;
console.log(dropIt2(nums,call));