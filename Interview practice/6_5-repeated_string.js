// count how many times has the letter 'a' showed in the string

/*
 * Complete the 'repeatedString' function below.
 *
 * The function is expected to return a LONG_INTEGER.
 * The function accepts following parameters:
 *  1. STRING s
 *  2. LONG_INTEGER n
 */

//example : returns 7
const str = 'aba';
const num = 10;

// method 1
// var result = teststring.split("a").length - 1;
// return result;

// method 2
// var result = (teststring.match(/a/g) || []).length;
// return result;

// method 3
// count it with for loop

function repeatedString(s, n) {
    // Write your code here
    var result = s.split("a").length - 1;
    var remain = n%s.length;
    var extra = 0;
    for(var i=0; i<remain; i++)
    {
        if(s[i] == 'a')
        {
            extra++;
        }
    }
    var count = Math.floor(n/s.length);
    return result * count + extra;
}

console.log(repeatedString(str, num));