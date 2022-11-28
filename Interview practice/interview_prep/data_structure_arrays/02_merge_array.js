// this should return 
let array1 = [0, 3, 4, 31];
let array2 = [4, 6, 30];

const mergedSortArray = (arr1, arr2) => {
    let result = [];
    let i = 0;
    let j = 0;
    let arr1Item = arr1[0];
    let arr2Item = arr2[0];
    while ( arr1Item || arr2Item){
        if(arr1Item < arr2Item || !arr1Item || !arr2Item){
            result.push(arr1Item);
            i++
            arr1Item = arr1[i];
        } else {
            result.push(arr2Item);
            j++
            arr2Item = arr2[j];
        }
    }
    

    return result;
}

console.log(mergedSortArray(array1, array2))