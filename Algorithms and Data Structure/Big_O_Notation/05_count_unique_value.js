let test1 = [1, 2, 3, 4, 5, 6, 7, 6, 6, 7]

const countUniqueValue = arr => {
    let count = 0;
    for(let i = 0; i < arr.length; i++){
        if(arr[count] != arr[i]){
            count++;
            arr[count] = arr[i];
        }
    }
}

console.log(countUniqueValue(test1));