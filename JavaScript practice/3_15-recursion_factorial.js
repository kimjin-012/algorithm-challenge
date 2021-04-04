/* 
Recursive Factorial

Input: integer
Output: integer, product of ints from 1 up to given integer

If less than zero, treat as zero.
Bonus: If not integer, truncate (remove decimals).

Experts tell us 0! is 1.

rFact(3) = 6 (1*2*3)
rFact(6.8) = 720 (1*2*3*4*5*6)
*/

const num1 = 3;
const expected1 = 6;
// Explanation: 1*2*3 = 6

const num2 = 6.8;
const expected2 = 720;
// Explanation: 1*2*3*4*5*6 = 720

const num3 = 0;
const expected3 = 1;

function factorial(n) {
    console.log(n);
    var count = 1;
    var result = 1;
    if(n = 0){
        console.log(n)
        return 1
    }

    while(count <= n){
        console.log(count)
        result = result*count;
        count += 1;
    }
    return result;
}
console.log(factorial(num1))