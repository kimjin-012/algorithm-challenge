// Use for reviewing algo

function index(arr) {
        // dp[i]: Stores the position of
    // rightmost fountain that can
    // be covered by water of leftmost
    // fountain of the i-th fountain
    let dp = [];
    for(let i = 0; i < arr.length; i++)
    {
         dp[i] = -1;
    }
 
    // Stores index of leftmost fountain
    // in the range of i-th fountain
    let idxLeft;
 
    // Stores index of rightmost fountain
    // in the range of i-th fountain
    let idxRight;
 
    // Traverse the array
    for(let i = 0; i < arr.length; i++)
    {
        idxLeft = Math.max(i - arr[i], 0);
        idxRight = Math.min(i + (arr[i] + 1), arr.length);
        dp[idxLeft] = Math.max(dp[idxLeft],
                               idxRight);
    }
 
    // Stores count of fountains
    // needed to be activated
    let cntfount = 1;
 
    // Stores index of next fountain
    // that needed to be activated
    let idxNext = 0;
    idxRight = dp[0];
 
    // Traverse dp[] array
    for(let i = 0; i < arr.length; i++)
    {
        idxNext = Math.max(idxNext, dp[i]);
 
        // If left most fountain
        // cover all its range
        if (i == idxRight)
        {
            cntfount++;
            idxRight = idxNext;
        }
    }
    return cntfount;
}
console.log(index([3, 1, 1, 1]));
// let fountain = [];
// let count = 1;
// let left;
// let right;
// let next = 0;
// right = fountain[0];

// // creating the fountain array with default of -1
// // 
// for(let i = 0; i < arr.length; i++)
// {
//     fountain[i] = -1;
// }

// for(let i = 0; i < arr.length; i++)
// {
//     left = Math.max(i - arr[i], 0);
//     right = Math.min(i + (arr[i] + 1), arr.length);
//     fountain[left] = Math.max(fountain[left],right);
// }

// for(let i = 0; i < arr.length; i++)
// {
//     next = Math.max(next, fountain[i]);
//     if (i == right)
//     {
//         count++;
//         right = next;
//     }
// }
// return count;