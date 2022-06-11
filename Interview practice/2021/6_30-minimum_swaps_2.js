// Minimum Swaps
// You are given an unordered array consisting of consecutive integers
// You are allowed to swap any two elements. Find the minimum number of swaps required to sort the array in ascending order.

// For example
// arr = [1, 3, 2] should become arr = [1, 2, 3] by one swap

const arr_1 = [4, 3, 1, 2] // The output should be 3
const arr_2 = [2, 3, 4, 1, 5] // The output should be 3

function minimumSwaps(arr) {
    let count = 0;
    for(let i = 0; i < arr.length - 1; i++){
        if(arr[i] !== i+1) {
            arr[arr.lastIndexOf(i+1)] = arr[i];
            count++;
        }
    }
    return count;
}

// The top one timed out... decided to swap using the reightIdx
function minimumSwaps2(arr) {
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        const right = i+1;
        if (arr[i] !== right) {
            const rightIdx = arr.indexOf(right, i);
            arr[rightIdx] = arr[i];
            arr[i] = right;
            ++count;
        }
    }
    
    return count;
}