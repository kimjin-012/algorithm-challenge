/* 
    https://www.hackerrank.com/challenges/diagonal-difference/problem
    Given a square matrix (2d array) of integers
    Calculate the absolute difference between the sums of its diagonals
        - top left to bottom right diagonal
        - top right to bottom left diagonal
    
    EXAMPLE
    let nums = [
        [ 1, 2, 3 ],
        [ 5, 3, 2 ],
        [ 9, 7, 1 ]
    ]
    diagonalDifference(nums) should return 10, because (1 + 3 + 1) - (3 + 3 + 9)
    is 5 - 15, which is -10, whose absolute value is 10
*/
function diagonalDifference(matrix){
    var topleft = 0;
    var topright = 0;
    for(var i = 0; i < matrix.length; i++){
        topleft += matrix[i][i];
        topright += matrix[i][matrix.length - i - 1];
    }
    return Math.abs(topleft - topright);
}
let nums = [
    [ 1, 2, 3 ],
    [ 5, 3, 2 ],
    [ 9, 7, 1 ]
];
console.log(diagonalDifference(nums));
