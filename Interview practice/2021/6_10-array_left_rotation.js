/*
 * Complete the 'rotLeft' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts following parameters:
 *  1. INTEGER_ARRAY a
 *  2. INTEGER d
 */

// example inputs, one array and a integer
const a = [1, 2, 3, 4, 5];
const d = 2;

// this should rotate array 'a', 'd' times to the left..
// therefore the output should be [3, 4, 5, 1, 2]

function rotLeft(a, d) {
    // Write your code here
    var array = a;
    for(var i = 0; i<d; i++){
        array.push(array.shift())
    }
    return array;
}

console.log(rotLeft(a, d));