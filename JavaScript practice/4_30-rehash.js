/* 
Given to alumni by Riot games in 2021.
*/

const str1 = "b70a164c32a20c10";
const expected1 = "a184b70c42";

/**
 * Rehashes an incorrectly hashed string by combining letter count occurrences
 * and alphabetizing them.
 * Time: O(?).
 * Space: O(?).
 * @param {string} s An incorrectly hashed string.
 * @returns {string} The correctly rehashed string alphabetized.
 */
function rehash(s) {
    var thisInt = "";
    var thisLetter = "";
    for(var item in s){
        if(isNaN(item) && thisLetter == null){
            thisLetter = item;
        }
        if(!isNaN(item)){
            thisInt += item;
        }
        else{
            var convert = Number(thisInt);
        }
    }
}

ex = "4";
console.log(isNaN(ex));