/*
https://www.hackerrank.com/challenges/ctci-bubble-sort/problem?h_l=interview&isFullScreen=false&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=sorting
*/

function countSwaps(a) {
    let numSwaps = 0 
    
    for(let i=0; i<a.length; i++){
        for(let i=0; i<a.length-1; i++){
            if(a[i] > a[i+1]){
                let temp = a[i]
                a[i] = a[i+1]
                a[i+1] = temp
                numSwaps++
            }
        }
    }
}