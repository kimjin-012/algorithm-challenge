// 'Hello my name is Jin' will be
// 'niJ si eman ym olleH'

let exampleString = 'Hello my name is Jin';

const reverse = (str) => {
    // Validate first :
    if(!str || str.length < 2 || typeof str !== 'string'){
        return "Error, this is not a string or no valid changes"
    }

    const strLength = str.length - 1;
    let result = [];

    for(let i = strLength; i >= 0; i--){
        result.push(str[i]);
    }

    return result.join('');
}

//for built in method
const reverse2 = (str) => {
    return str.split('').reverse().join('')
}
//or
const reverse3 = str => str.split('').reverse().join('');
//or
const reverse4 = str => [...str].reverse().join('');


console.log(reverse(exampleString));
console.log(reverse2(exampleString));
console.log(reverse3(exampleString));
console.log(reverse4(exampleString));