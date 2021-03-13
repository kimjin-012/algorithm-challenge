function countfrequency(arr){
    var count = {};
    for (var i = 0; i<arr.length; i++){
        if (arr[i] in count){
            count[arr[i]] += 1;
        }
        else{
            count[arr[i]] = 1;
        }
    }
    return count
}
var arr1 = ["a", "b", "a", "c", "B", "c", "c", "d"]
console.log(countfrequency(arr1))

var str1 = "This is a test";

function reverseWordOrder(wordsStr) {
    var convert = wordsStr.split('');
    for(var i=0; i<convert.length/2; i++){
        var sw = convert[i];
        convert[i] = convert[convert.length-1-i];
        convert[convert.length-1-i]=sw;
    }
    return convert.join("")
}

console.log(reverseWordOrder(str1))

function swapwords(arrstr){
    var newstr = '';
    for(var i = 0; i<convert.length; i++){
        if (convert[i] == ' '){
            for (var j = 0; j<i; j++){

            }
        }
    }
    return newstr
}