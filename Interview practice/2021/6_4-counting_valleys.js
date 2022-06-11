// How many 'Valleys' have hiker has climbed through
// basically count how many times have hiker climbed up from sea level
// U means up, and D means down

const s = 12;
const p = 'DDUUDDUDUUUD'

const s1 = 8;
const p1 = 'UDDDUDUU'
// for example
// _/\      _
//    \    /
//     \/\/

function countingValleys(steps, path) {
    // Write your code here
    var max = 0;
    var count = 0;
    for(var i=0; i<steps; i++)
    {
        if(path[i] == 'U')
        {
            count++;
        }
        else
        {
            count--;
        }

        if(count == 0 && path[i] == 'U')
        {
            max++;
        }
    }
    return max;
}

console.log(countingValleys(s, p));
console.log(countingValleys(s1, p1));