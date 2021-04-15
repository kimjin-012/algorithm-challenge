/* 
    Time in Words
    Write a function that accepts 2 numbers, hour and minute, for hour of the day and minutes of the hour,
    and return a string of the time. Follow these patterns:
                5:00 --> five o' clock
                5:01 --> one minute past five
                5:10 --> ten minutes past five
                5:15 --> quarter past five
                5:30 --> half past five
                5:40 --> twenty minutes to six
                5:45 --> quarter to six
                5:47 --> thirteen minutes to six
                5:28 --> twenty eight minutes past five

    EXAMPLE:
    let h = 5;
    let m = 47;

    timeInWords(h, m) should return "thirteen minutes to six"
*/
function timeInWords(hour, minute){
    let numbers = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eightteen", "nineteen"];
    let cut = "";
    if(minute == 0){
        return numbers[hour] + " o' clock"
    }
    if(minute == 30){
        cut = " half past" + numbers[hour];
    } else if(minute < 30) {
        if(minute == 20){
            cut = " twenty minutes past"
        } else if(minute > 20) {
            cut = " twenty";
            cut += numbers[minute - 20];
            cut += " minutes past"
        } else if(minute < 20 && minute > 10) {
            cut = numbers[minute] + " minutes past";
        } else if(minute < 10){
            cut = numbers[minute] + " minute past"
        }
        cut += " " + numbers[hour];
    } else if(minute > 30) {
        let sub = 60 - minute; //ex: 28
        if(sub == 20){
            cut = " twenty minutes to";
        } else if(sub > 20){
            cut = " twenty";
            cut += numbers[sub - 20];
            cut += " minutes to";
        } else if(sub < 20 && sub > 10) {
            cut = numbers[sub] + " minutes to"
        } else if(sub < 10){
            cut = numbers[sub] + " minute to"
        }
        cut += " " + numbers[hour];
    }
    return cut;
}
let h = 5;
let m = 0;

console.log(timeInWords(h, m))