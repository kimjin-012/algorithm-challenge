/**
     * It ain't much, but it's honest work. A worker who measures water level
     * fluctuations in a river is asked to find the largest fluctuation in water
     * levels during a day, but only for rises in water levels.
     * 
     * Write a function that takes an array of numbers, representing water levels at 
     * different times throughout the day, and return the largest rise in water level
     * measured that day, but ONLY rises
     * 
     * EXAMPLE:
     * let nums = [15, 17, 30, 14, 5, 16, 25, 9, 3]
     * 
     * largestFluctuation(nums) should return 20, because the highest rise in the water level
     * is from 5 to 25 feet
 */
function largestFluctuation(levels){
    var fluc = 0;
    var largest = 0;
    var start = 0;
    while(start < levels.length){
        for(var i = 1; i < levels.length - start; i++){
            diff = levels[start + i] - levels[start];
            if(diff > 0){
                console.log("calculated:" + diff + ", because:" + levels[start + i] + " and " + levels[start]);
                fluc = diff;
            }
            if(fluc > largest){
                largest = fluc;
            }
        }
        start++;
    }
    return largest;
}
let nums = [15, 17, 30, 14, 5, 16, 25, 9, 3];
console.log(largestFluctuation(nums));
