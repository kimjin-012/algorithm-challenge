/*
 * Complete the 'sherlockAndAnagrams' function below.
 *
 * Link: https://www.hackerrank.com/challenges/sherlock-and-anagrams/problem?h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=dictionaries-hashmaps&h_r=next-challenge&h_v=zen
 * The function is expected to return an INTEGER.
 * The function accepts STRING s as parameter.
 */

// Difficult task, dislike how its O(n^2)

function sherlockAndAnagrams(s) {
    // Write your code here
    const dict = {}
    var count = 0

    for (var i = 0; i < s.length; i++) {
        for (var j = i + 1; j < s.length + 1; j++) {
            const set = s.slice(i, j).trim().split('').sort().join('')

            if (dict[set]) { 
                count += dict[set]
                dict[set]++
            } else {
                dict[set] = 1
            }     
        }            
    }

    return count
}