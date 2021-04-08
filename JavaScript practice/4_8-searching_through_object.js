/* 
    Given a search criteria object whose values will only be
    primitives (ints, strings, booleans) and a list of objects.
    return any object that matches all the key value pairs in the search
    criteria object.
    Bonus: write a 2nd solution using built-in methods to practice functional
    programming.

    EXAMPLE:
    const search = {
        power_1: "Money",
        power_2: "Brooding"
    }

    const heroes = [
        {
            fName: "Clark",
            lName: "Kent",
            alias: "Superman",
            power_1: "Super strength",
            power_2: "Flight"
        },
        {
            fName: "Bruce",
            lName: "Wayne",
            alias: "Batman",
            power_1: "Money",
            power_2: "Brooding"
        },
        {
            fName: "Oliver",
            lName: "Queen",
            alias: "Green Arrow",
            power_1: "Money",
            power_2: "Bow and Arrow"
        },
        {
            fName: "Ryan",
            lName: "Choi",
            alias: "Atom",
            power_1: "Size alteration",
            power_2: "Intelligence"
        }
    ]

    find(search, heroes) should return:
    [
        {
            fName: "Bruce",
            lName: "Wayne",
            alias: "Batman",
            power_1: "Money",
            power_2: "Brooding"
        }
    ]

    even though there is only 1 match, it should still be in an array.

*/
function find(criteria, collection){
    const results = []; 
    for(var item of collection){ 
        let match = true;
        
        for(var key in criteria){ 
            if(criteria[key] !== item[key]){
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