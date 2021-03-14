function rollOne(min,max){
    var min = Math.ceil(min);
    var max = Math.floor(max);
    return Math.floor(Math.random()*(max-min+1)+min);
}
// console.log(rollOne(1,5));

function playFives(num){
    var dice = 0;
    for(i=0;i<num;i++){
        dice = rollOne(1,6);
        console.log(dice);
        if(dice == 5){
            console.log("That's good luck!")
        }
    }
}

function playStatistics(){
    var low = 10;
    var high = 0;
    var val = 0;
    for(i=0;i<8;i++){
        val= rollOne(1,6);
        if(val > high){
            high = val;
        }
        if(val < low){
            low = val;
        }
    }
    console.log(low, high);
}
playStatistics();