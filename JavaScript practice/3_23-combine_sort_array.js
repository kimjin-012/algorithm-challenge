/* 
    Combining two arrays:

    Efficiently combine two already sorted multiset arrays 
    into an array containing the sorted set intersection of the two.
    Output: only the shared values between the two arrays (deduped).
    Venn Diagram Visualization (bottom) https://i.ytimg.com/vi/sdflTUW6gHo/maxresdefault.jpg

    EXAMPLE:
    let nums1 = [1,4,5,7,7,8,9,9,10,12];
    let nums2 = [2,3,3,6,7,9,9,9,11,13];

    orderedIntersection(nums1, nums2) should return [7,9] because 7 and 9 are the only values
    in both sets, and only appear once because we want the output to be the shared deduped values
*/
function orderedIntersection(sortedA, sortedB){
    var object = {};
    var checked = [];
    for(var i=0; i<sortedA.length; i++){
        var temp = sortedA[i];
        if(object[temp]){
            object[temp]++;
        }
        else{
            object[temp] = 1;
            console.log(temp);
            if(sortedB.includes(temp)){
                checked.push(temp);
            }
        }
    }
    return checked;
}
let nums1 = [1,4,5,7,7,8,9,9,10,12];
let nums2 = [2,3,3,6,7,9,9,9,11,13];
console.log(orderedIntersection(nums1, nums2))

//Another way by using Set

var newset = new Set(nums1.filter(function(e) { return nums2.indexOf(e) != -1}));
console.log(newset)
