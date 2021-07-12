// Link: https://www.hackerrank.com/challenges/count-triplets-1/problem?h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=dictionaries-hashmaps

function countTriplets(arr, r) {
    if (arr.length < 3) {
        return 0
    }

    var center = {}
    var occur = {}
    let count = 0

    for (var i = arr.length - 1; i >=0; i--) {
        var first = arr[i]
        var second = first * r
        var third = second * r
        count += center[third] || 0
        
        if(center[second]) {
            center[second] += occur[second] || 0
        } else {
            center[second] = occur[second] || 0
        }

        if(occur[first]) {
            occur[first]++
        } else {
            occur[first] = 1
        }

    }
    return count
}