function minimumBribes(q) {
    let count = 0;
    let min = q.length;
    for (var i = q.length - 1; i >= 0; i--){
        if (q[i] - i > 3){
            console.log(`Too chaotic`)
            return;
        }
        if (q[i] > i+1){
            count += (q[i]-(i+1));
        } else {
            if (min > q[i]){
                min = q[i];
            } else if (q[i] != min){
                count++;
            }
        }
    }
    console.log(count)
}

// let swaps = 0

// for (let i = 0; i < q.length; i++) {
//     let bribes = q[i] - (i + 1)
//     let maxAdvance = q[i] - 2 > 0 ? q[i] - 2 : 0

//     if (bribes > 2) {
//     console.log('Too chaotic')
//     return
//     }

//     for (let j = maxAdvance; j < i; j++) {
//         if (q[j] > q[i]) swaps++
//     }
// }
// console.log(swaps)