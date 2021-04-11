/* 
    Given an array of objects, a searchFor string, and searchBy key that exists in the object
    return a new array of only those objects whose value for the given key starts with the given search string
    You can assume the key will exist on the object and the value of that key will be a string
    Bonus: make the search case insensitive
    Bonus: re-write it with functional programming in mind, using built in methods
    Bonus: allow the search method to be provided as a parameter, e.g., string methods: includes, startsWith, endsWith
        - you can assume the searchMethod will be valid
    
    EXAMPLE:
    const coll = [
        {
            fName: "Bill",
            lName: "Bob"
        },
        {
            fName: "Mary",
            lName: "Smith"
        },
        {
            fName: "Joey",
            lName: "Smony"
        }
    ]

    let search = "Sm";
    let searchBy = "lName"

    filterByKey(coll, search, searchBy) should return
    [
        {
            fName: "Mary",
            lName: "Smith"
        },
        {
            fName: "Joey",
            lName: "Smony"
        }
    ]
*/
// One liner
function filterByKey(collection, searchFor, searchBy){
    return collection.filter(name => String(name[searchBy]).toLowerCase().startsWith(searchFor.toLowerCase()))
}

//if choose...
function filterByKey(collection, searchFor, searchBy, method="startsWith"){
    return collection.filter(name => String(name[searchBy]).toLowerCase()[method](searchFor.toLowerCase()))
}

function filterByKey(collection, searchFor, searchBy){
    var results = [];
    for(var key of collection){
        var match = true;
        for(var i=0; i<searchFor.length; i++){
            if(key[searchBy][i] !== searchFor[i]){
                match = false;
                break;
            }
        }

        if(match){
            results.push(item);
        }
    }
    return results;
}