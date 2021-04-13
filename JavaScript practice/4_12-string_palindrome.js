/* 
    interview
    Given a string
    return whether or not it's possible to make a palindrome out of the string's characters
    What is it about a string that makes it possible for it to be a palindrome?

    Palindrome - a word/phrase that is spelled the same way forwards and backwards

    EXAMPLE:
    const str1 = "dda";

    const str2 = "aaadd";

    const str3 = "acdd";

    canStringBecomePalindrome(str1) should return true, because "dda" can be rearranged as "dad", 
    which is the same forwards and backwards.

    canStringBecomePalindrome(str2) should return true, because "aaadd" can be rearranged as "daaad"
    or "adada", which are both the same forwards and backwards.

    canStringBecomePalindrome(str3) should return false, because "acdd" cannot be rearranged in any
    way that would make it the same forwards and backwards
*/
function canStringBecomePalindrome(str){
    const frequency = {};

    for(var i = 0; i < str.length; i++) {
        var word = str[i].toLowerCase();
        if(!frequency.hasOwnProperty(word)){
            frequency[word] = 1;
        } else {
            frequency[word]++;
        }
    }
    var count = 0;
    for(const key in frequency){
        if(frequency[key] % 2 !== 0) {
            count++;
            if(count > 1) {
                return false;
            }
        }
    }
    return true;
}