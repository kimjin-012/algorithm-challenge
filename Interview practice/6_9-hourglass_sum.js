// === Sample Input :
// 1 1 1 0 0 0
// 0 1 0 0 0 0
// 1 1 1 0 0 0
// 0 0 2 4 4 0
// 0 0 0 2 0 0
// 0 0 1 2 4 0
// in arr[i][j] format (made the matrix below)

const arr = [
    [1, 1, 1, 0, 0, 0],
    [0, 1, 0, 0, 0, 0],
    [1, 1, 1, 0, 0, 0],
    [0, 0, 2, 4, 4, 0],
    [0, 0, 0, 2, 0, 0],
    [0, 0, 1, 2, 4, 0]
];

/* Add the number in a shape of an hourglass
* for example...
* The First hourglass should be
    1, 1, 1
        1
    1, 1, 1
* and the result should be 1+1+1+1+1+1+1=7
* Find the largest sum of the hourglass and return it.

* Complete the 'hourglassSum' function below.
*
* The function is expected to return an INTEGER.
* The function accepts 2D_INTEGER_ARRAY arr as parameter.
*/

function hourglassSum(arr) {
    // Write your code here
    var max = -Infinity;
    var j = 0;
    for(var i=0; i<4; i++){
        console.log("--------Math-------")
        let sumtop = arr[i][j] + arr[i][j+1] + arr[i][j+2];
        console.log("TOP : " + sumtop);
        let sumcen = arr[i+1][j+1];
        console.log("CEN : " + sumcen)
        let sumbot = arr[i+2][j] + arr[i+2][j+1] + arr[i+2][j+2];
        console.log("BOT : " + sumbot)
        let sum = sumtop + sumcen + sumbot;
        console.log("RES : " + sum)
        if(sum > max){
            max = sum;
        };
        if(i == 3){
            i = -1;
            j++;
        };
        if(j == 4){
            break;
        };
    }
    return max;
}

console.log(hourglassSum(arr));