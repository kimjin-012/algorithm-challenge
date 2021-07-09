/*
 * Complete the 'twoStrings' function below.
 *
 * Link : https://www.hackerrank.com/challenges/two-strings/problem?h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=dictionaries-hashmaps
 * The function is expected to return a STRING.
 * The function accepts following parameters:
 *  1. STRING s1
 *  2. STRING s2
 */

function twoStrings(s1, s2) {
    // Write your code here
    var dict = {}
    for(var i of s1) {
        dict[i] = 1;
    }
    for(var i of s2) {
        if(dict[i]) {
            return 'YES'
        }
    }
    return 'NO'
}
