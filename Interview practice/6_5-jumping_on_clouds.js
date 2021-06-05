// user will jump up the clouds but must avoid the cloud with id 1
// user can up to next cloud(1) or skip one to next (2)
// find the minimum amount of jumps required for the given array

/*
 * Complete the 'jumpingOnClouds' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER_ARRAY c as parameter.
 */

const a1 = [0,0,1,0,0,1,0]; // should return 4
const a2 = [0,0,0,0,1,0]; // should return 3

function jumpingOnClouds(c) {
    // Write your code here
    var count = 0;
    var i_count = 0;
    for(var i=0; i<c.length; i++)
    {
        if(c[i] == 0)
        {
            i_count++;
            if(i_count == 2)
            {
                i_count = 0;
                count++;
            }
        }
        else
        {
            i_count = 0;
            count++;
        }
    }
    return count;
}

console.log(jumpingOnClouds(a1));
console.log(jumpingOnClouds(a2));