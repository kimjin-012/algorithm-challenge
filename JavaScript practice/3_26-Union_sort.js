/* 
    March 26
    Union Sorted Arrays
    Efficiently combine two already-sorted multiset arrays
    into a new sorted array containing the multiset union.
    Unions by default will take the set of dupes
    that has the highest occurrences from one array.
    Venn Diagram Visualization (top) https://i.ytimg.com/vi/sdflTUW6gHo/maxresdefault.jpg

    EXAMPLE
    let nums1 = [1, 3, 3, 4, 5, 5, 5 ];
    let nums2 = [2, 3, 5, 6, 6, 7, 9 ];

    orderedMultisetUnion(sortedA, sortedB) should return:
    [1, 2, 3, 3, 4, 5, 5, 5, 6, 6, 7, 9]
*/

function orderedMultisetUnion(sortedA, sortedB){
    const result = [];
    for(var i=0; i<sortedA.length; i++){
        var thisnum = sortedA[i];
        if(sortedB.includes(thisnum)){
            for(var j=0; j<sortedB.length; j++){
                var count = 0;
                if(sortedB[j] > thisnum){
                    continue;
                }
                if(sortedB[j] == thisnum){
                    count++;
                }
            }
            for(var k=0; k<sortedA.length; k++){
                var kount = 0;
                if(sortedA[k] > thisnum){
                    continue;
                }
                if(sortedA[k] == thisnum){
                    kount++;
                }
            }
            if(count >= kount){
                for(var c=0; c<count; c++){
                    result.push(thisnum);
                }
            }
            else if(count < kount){
                for(var c=0; c<kount; c++){
                    result.push(thisnum);
                }
            }
        }
        else{
            for(var j=0; j<sortedA.length; j++){
                if(sortedA[j] == thisnum){
                    result.push(thisnum);
                }
                if(sortedA[j] > thisnum){
                    continue;
                }
            }
        }
    }
    return result;
}
let nums1 = [1, 3, 3, 4, 5, 5, 5 ];
let nums2 = [2, 3, 5, 6, 6, 7, 9 ];
console.log(orderedMultisetUnion(nums1, nums2));