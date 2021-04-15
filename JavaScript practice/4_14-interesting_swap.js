/* 
    Interview question that Neil received.
    Given two vars, x and y that store integers, swap their values WITHOUT
    creating any new variables or using any data types.
    Don't worry about creating a function either.
    No destructuring
*/
let x = 5;
let y = 3;

console.log(x,y);

x = x + y; // 3 + 5 = 8
y = x - y; // 8 - 3 = 5
x = x - y; // 8 - 5 = 3

console.log(x,y);