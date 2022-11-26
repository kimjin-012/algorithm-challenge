let string1 = 'anagram'
let string2 = 'nagaram'

const anagram = (string1, string2) => {
    if(string1.length !== string2.length){
        return false;
    }

    let obj1 = {}
    let obj2 = {}

    for(let char of string1){
        obj1[char] = (obj1[char] || 0) + 1;
        // obj1[char] ? obj1[char] += 1 : obj1[char] = 1;
    }
    for(let char of string2){
        obj2[char] = (obj2[char] || 0) + 1;
    }
    
    for(let key in obj1){
        if(!obj2[key]){
            return false
        }
        if(obj1[key] !== obj2[key]){
            return false
        }
    }
    return true;
};

console.log(anagram(string1, string2));