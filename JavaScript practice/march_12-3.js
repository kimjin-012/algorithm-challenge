function parensValid(str) {
    var count = 0;
    for (var i = 0; i < str.length; i++){ //checks to see if first bracket is open
        if (str[i]  == ')'){
            return false
        } else if(str[i] == '('){
            break
        }
    }
    for (var i = str.length - 1; i > -1; i--){ //checks to see if last bracket is closed
        if (str[i] == "("){
        return false
        } else if (str[i] == ")"){
            break
        }
    }
    for (var i = 0; i < str.length; i++){
        if (str[i] == "("){
            count += 1;
        }
        if (str[i] == ")"){
            count -= 1;
        }
    }
    if (count == 0){
        return true
    } else{
        return false
    }
}

const str2 = "N(0(p)3";
console.log(parensValid(str2));