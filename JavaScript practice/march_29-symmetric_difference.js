/*
    Given two arrays of ints
    return the symmetric differences, (aka disjunctive union)
        - these are the elements which are in either of the sets and not their intersection (the union without the intersection)
        think of a venn diagram filled in except the overlapping middle part is not filled in (the intersection is excluded)
        - i.e., if an element is in at least one of the arrays, but not in any other, it should be included (dupes included 1 time only)
    Venn Diagram Visualization:
        - https://miro.medium.com/max/3194/1*N3Z94nCNu8IHsFenIAELJw.jpeg
    EXAMPLE:
    let arrA = [4,1,2,3,4];
    let arrB = [1,2,3,5,5,2];

    symmetricDifference(arrA, arrB) should return [4, 5] because 4 and 5 are the values that are only in 1 
    array each, and only appear in the result once, even though they have duplicates in their original arrays
*/
function symmetricDifference(nums1, nums2){
    var diff = [];
    for(let i = 0; i < nums1.length; i++){
        if(!nums2.includes(nums1[i])){
            if(!diff.includes(nums1[i])){
                diff.push(nums1[i]);
            }
        }
    }
    for(let j = 0; j < nums2.length; j++){
        if(!nums1.includes(nums2[j])){
            if(!diff.includes(nums2[j])){
                diff.push(nums2[j]);
            }
        }
    }
    return diff;
}
let arrA = [4,1,2,3,4];
let arrB = [1,2,3,5,5,2];
console.log(symmetricDifference(arrA, arrB))
// NICE!