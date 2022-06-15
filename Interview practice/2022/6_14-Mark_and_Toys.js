/*
https://www.hackerrank.com/challenges/mark-and-toys/problem?isFullScreen=true&h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=sorting
*/
let array = [1, 12, 5, 111, 200, 1000, 10];
let budget = 50;
maximumToys(array, budget);

function maximumToys(prices, k) {
    let count = 0;
    let total = 0;
    prices = prices.sort(function(a, b){ return a - b; });
    console.log(prices);
    while(total <= k){
        console.log("total before : " + total);
        total += prices[count];
        console.log("total after : " + total)
        if(total > k){
            break;
        }
        count++;
        console.log("count is now : " + count)
    }

    return count;
}