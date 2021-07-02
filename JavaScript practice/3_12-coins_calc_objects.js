function countcoins(cents){
    var dict = {};
    var quarter, dime, nickle, penny = 0;
    
    quarter = Math.floor(cents/25);
    dict['quarters'] = quarter;
    cents -= quarter*25;
    dime = Math.floor(cents/10);
    dict['dimes'] = dime;
    cents -= dime*10;
    nickle = Math.floor(cents/5);
    dict['nickle'] = nickle;
    cents -= nickle*5;
    penny = cents;
    dict['penny'] = penny;
    return dict;
}
    
    
// console.log(quarter, dime, nickle, cents)
console.log(countcoins(99));

function countcoins2(coins){
    var dict = {};
    var type = [25, 10, 5]
    var result = [0, 0, 0]
    for (i = 0; i<3; i++){
        result[i] = Math.floor(coins/type[i]);
        coins -= result[i]*type[i];
    }
    dict['quarters'] = result[0];
    dict['dimes'] = result[1];
    dict['nickles'] = result[2];
    dict['penny'] = coins;

    return dict;
}
console.log(countcoins2(99));