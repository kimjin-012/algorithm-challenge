function stringdupe(str){
    var checkobj = {};
    var splitit = str.split('');
    var newarr = [];
    for (var i = 0; i<splitit.length; i++){
        var val = splitit[i];
        if(val in checkobj){
            continue
        }
        else{
            checkobj[val] = 1;
            newarr.push(val);
        }
    }
    return newarr.join("")
}

var str1 = 'abcABC';
var str2 = 'helloo'
console.log(stringdupe(str2));

//this works, simpler ways
function stringDedupe(str) {
    var result =""
    var nbr ={}
    for (var i=0; i<str.length; i++){
        let char=str[i]
        if(nbr[char]){
        nbr[char]++
        }
        else{
            nbr[char]=1
            result+=char;
        }
    }
// var  str1 = "abcABC";
    return result
}

//************* seconds
