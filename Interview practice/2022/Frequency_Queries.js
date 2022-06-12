/*
HackerRank url : https://www.hackerrank.com/challenges/frequency-queries/problem?h_l=interview&isFullScreen=false&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=dictionaries-hashmaps
*/
const example = [(1,1),(2,2),(3,2),(1,1),(1,1),(2,1),(3,2)];

function freqQuery(queries) {
    var obj = {};
    var count = [];
    var result = [];
    for(var i=0; i<queries.length; i++){
        console.log(i);
        const [que, val] = queries[i];
        const checkVal = obj[val] || 0;

        if(que == 1){
            obj[val] = checkVal++;
            count[val] = count[val] == null ? 0 : count[val]++; 
        }
        if(que == 2){
            obj[val] = checkVal--;
        }
        if(que == 3){
            result.push()
        }
    }

}

freqQuery(example);