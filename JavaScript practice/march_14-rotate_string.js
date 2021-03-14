function rotatestr(str, n){
    var newstr = '';
    newstr += str.slice(-n);
    for(var i=0; i<(str.length - n); i++){
        newstr += str[i];
    }
    return newstr;
}

const str1 = "Hello World";
const rotateAmnt1 = 2;

console.log(rotatestr(str1, rotateAmnt1))

function isrotate(s1, s2){
    if (s1.length != s2.length){
        return false;
    }
    for(var n=0; n<s1.length; n++){
        var newstr = '';
        newstr += s1.slice(-n);
        for(var i=0; i<(s1.length - n); i++){
            newstr += s1[i];
        }
        if(newstr == s2){
            return true;
        }
    }
    return false;
}

// const strA1 = "ABCD";
// const strB1 = "CDAB";
// console.log(isrotate(strA1, strB1))

const strA2 = "ABCD";
const strB2 = "CDBA";
console.log(isrotate(strA2, strB2))