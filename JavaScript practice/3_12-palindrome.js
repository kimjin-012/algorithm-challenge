function isPalindrome(str) {
    var newstring = "";
    for (i = str.length - 1; i>=0; i--){
        newstring += str[i];
    }
    if (str == newstring){
        return true;
    } else{
        return false;
    }
}

console.log(isPalindrome("racecar"))

function isPalindrome(str) {
    return str.split("").reverse().join("");
    
}
console.log(isPalindrome("hello"))
//---------
function longest(str){
    var newstring = "";
    for (i=0; i<str.length; i++){
        for (j = str.length - 1; j>=1; j--){
            if(str[i] == str[j]){
                for(x=i; x <= j; x++){
                    newstring += str[i]
                }
                if (newstring == newstring.split("").reverse().join("")){
                    return newstring
                }else{
                    return false
                }
            }
        }
    }
}