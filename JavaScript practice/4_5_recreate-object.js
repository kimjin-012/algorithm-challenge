/* 
    Recreate Object.entries method
    Given an object, return an array of arrays of the object's key value pairs, 
    where each key value pair is a 2 item array
    Do not include key value pairs from the given objects prototype (these are included 
    by default when looping over an object's keys)
*/

// Object.entries() demonstration
// const myObj = {
//     fName: "Cody",
//     lName: "Thaller",
//     age: 30
// }

// console.log(Object.entries(myObj));
// returns:
// [ [ 'fName', 'Cody' ], [ 'lName', 'Thaller' ], [ 'age', 30 ] ]

function entries(obj){
    var result = [];
    for (const prop in obj){
        var pusharr = []
        pusharr.push(prop);
        pusharr.push(obj[prop]);
        result.push(pusharr);
    }
    return result;
}
const myObj = {
    fName: "Cody",
    lName: "Thaller",
    age: 30
}
console.log(entries(myObj));
