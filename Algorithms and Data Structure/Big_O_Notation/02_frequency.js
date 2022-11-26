let arr1 = [1, 2, 3, 2]
let arr2 = [9, 1, 4, 4]

const freqV1 = (arr1, arr2) => {
    if(arr1.length !== arr2.length){
        return false;
    }
    for(let i = 0; i < arr1.length; i++){
        let match = arr2.indexOf(arr1[i] ** 2)
        if(match === -1){
            return false;
        }
        arr2.splice(match, 1);
    }
    return true;
}

const freqV2 = (arr1, arr2) => {
    if(arr1.length !== arr2.length){
        return false;
    }
    let counter1 = {}
    let counter2 = {}

    for(let val of arr1){
        counter1[val] = (counter1[val] || 0) + 1
    }
    for(let val of arr2){
        counter2[val] = (counter2[val] || 0) + 1
    }

    for(let key in counter1){
        if(!(key ** 2 in counter2)){
            return false;
        }
        if(counter1[key] == counter2[key ** 2]){
            return false;
        }
    }

    return true;
}

let t1 = performance.now();
let result = freqV1(arr1, arr2);
let t2 = performance.now();

let t3 = performance.now();
let resultV2 = freqV2(arr1, arr2);
let t4 = performance.now();

console.log(`First function's Time Elapsed : ${(t2 - t1) / 1000} seconds. With the result of : ` + result);
console.log(`Second function's Time Elapsed : ${(t4 - t3) / 1000} seconds. With the result of : ` + resultV2);