/*
 * Complete the 'arrayManipulation' function below.
 * Link : https://www.hackerrank.com/challenges/crush/problem?h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=arrays
 *
 * The function is expected to return a LONG_INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER n
 *  2. 2D_INTEGER_ARRAY queries
 */

function arrayManipulation(n, queries) {
    // Write your code here
    var array = Array(n + 1)
    let num = 0
    let max = 0
    
    queries.forEach(([startArr, endArr, val]) => {
        array[startArr] = array[startArr] || {start: 0, end: 0};
        array[endArr] = array[endArr] || {start: 0, end: 0};
        array[startArr].start += val;
        array[endArr].end += val;
    })
    
    array.forEach(e => {
        if(e) {
            num += e.start;
            if(num > max) {
                max = num;
            }
            num = num - e.end;
        }
    })
    
    return max;
}