/*
 * Complete the 'checkMagazine' function below.
 *
 * https://www.hackerrank.com/challenges/ctci-ransom-note/problem?h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=dictionaries-hashmaps
 * The function accepts following parameters:
 *  1. STRING_ARRAY magazine
 *  2. STRING_ARRAY note
 */

// This problem ask for the output to be in console.log

// Test case 1 - output: Yes
const str1 = [ 'give', 'me', 'one', 'grand', 'today', 'night' ]
const str2 = [ 'give', 'one', 'grand', 'today' ]

// Test case 2 - output: No
const str3 = ['two', 'times', 'three', 'is', 'not', 'four']
const str4 = ['two', 'times', 'two', 'is', 'four']

function checkMagazine(magazine, note) {
    // Write your code here
    var match = true
    for(var i of magazine) {
        mag_dict[i] = (mag_dict[i] || 0) + 1
    }
    for(var i of note) {
        mag_dict[i] = (mag_dict[i] || 0) - 1
    }
    for(var i in mag_dict) {
        if(mag_dict[i] < 0) {
            match = false
            break
        }
    }
    match ? console.log('Yes') : console.log('No')
}

console.log(checkMagazine(str3, str4))