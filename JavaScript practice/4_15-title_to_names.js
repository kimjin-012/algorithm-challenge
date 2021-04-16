/* 
    Given an honorific (name title) and array of full name strings,
    in "LastName, FirstName" format
    
    Return a new array of strings in this format: "Honorific FirstName LastName"

    EXAMPLE:
    const hon = "Mr.";
    const names = [];

    addHonorific(hon, names) should return [] because there are no names to add an honorific
    to.

    const hon2 = "Sir";
    const names2 = ["Sanchez, Rick", "Smith, Jerry"];

    addHonorific(hon2, names2) should return ["Sir Rick Sanchez", "Sir Jerry Smith"]
*/
function addHonorific(honorific, fullNames){
    var results = [];
    for(var i=0; i<fullNames.length; i++){
        var test = fullNames[i].replace(",", "").split(" ");
        [test[0], test[1]] = [test[1], test[0]];
        results.push(honorific + " " + test.join(" "));
    }
    return results;
}
const hon = "Mr.";
const names = [];
console.log(addHonorific(hon, names));

const hon2 = "Sir";
const names2 = ["Sanchez, Rick", "Smith, Jerry"];
console.log(addHonorific(hon2, names2));

//or
function addHonorific2(honorific, fullNames){
    return fullNames.map((n => {const result = n.split(', ') 
        return `${honorific} ${result[1]} ${result[0]}`}))

}
const hon = "Mr.";
const names = [];
console.log(addHonorific2(hon, names));

const hon2 = "Sir";
const names2 = ["Sanchez, Rick", "Smith, Jerry"];
console.log(addHonorific2(hon2, names2));