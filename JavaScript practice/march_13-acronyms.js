/* 
    Acronyms

    Create a function that, given a string, returns the string’s acronym 
    (first letter of each word capitalized). 

    Do it with .split first if you need to, then try to do it without
*/
var str1 = " there's no free lunch - gotta pay yer way. ";
// expected1 = "TNFL-GPYW";


function acronym(str){
    var arr = str.split("");
    var empty = ""; 
    var newArr = [];
    for (var i = 1; i < arr.length; i++){
        // console.log(i);
        if (arr[i-1] == " "){
            newArr.push(arr[i]);
            console.log(newArr)
        }
    }
    return newArr;
}

acronym(str1);

