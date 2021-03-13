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