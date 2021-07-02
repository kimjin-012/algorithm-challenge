function generateCoinChange(cents){
        //     dol  q  d  n
    var arr = [100,25,10,5,1];
    var mon = [0,0,0,0,0];
    var str = ['dollor:','quarter:','dimes:','nickle:','penny:'];
    for(var i=0; i<=arr.length; i++){
        if(cents >= 5){
        mon[i] = Math.floor(cents/arr[i]);
        cents -= arr[i]*mon[i];
        console.log(str[i] + mon[i]);
        }
        if(cents < 5){
            mon[4] = cents;
            console.log(str[4] + mon[4]);
            break;
        }
    }
}
generateCoinChange(244);

// or in dictionary
function index(a) {
    var dict = {}
    var type = [5, 10, 25, 100];
    var name = ['nickle', 'dime', 'quarter', 'dollar']
    for(var i = 3; i >= 0; i--){
        dict[name[i]] = Math.floor(a/type[i]);
        a -= dict[name[i]] * type[i];
    }
    dict['penny'] = a;

    return dict;
}
console.log(index(244))