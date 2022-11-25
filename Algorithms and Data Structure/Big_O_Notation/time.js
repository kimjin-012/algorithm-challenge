const addUpTo = n => {
    return (n * (n + 1)) / 2
}

const addUpTo2 = n => {
    let total = 0;
    for(let i = 1; i <= n; i++){
        total += i;
    }
    return total;
}

let t1 = performance.now();
let result = addUpTo2(20);
let t2 = performance.now();

console.log(`Time Elapsed : ${(t2 - t1) / 1000} seconds. With the result of : ` + result);