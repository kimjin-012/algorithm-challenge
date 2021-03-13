function pushexercise(x){
    x.push(5);
    return x;
}
console.log(pushexercise([1,2,3,4]))

function frontarray(num,z){
    var test = [z];
    for( var i=0; i<num.length; i++){
        test.push(num[i]);
    }
    return test;
}
console.log(frontarray([2,3,4,5],1));

var x = [1];
x[1] = 2;
console.log(x);

function frontwith(num,z){
    var test = [z];
    for(var i=0; i<num.length; i++){
        test[i + 1] = num[i];
    }
    return test;
}
console.log(frontwith([2,3,4,5],1));