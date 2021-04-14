/* 
    Given an array of objects that contain a category key,
    return an object to group the objects by their category.
    Make the grouping case-insensitive.
    Bonus: allow the key that is grouped by to be provided.

    EXAMPLE:
    const objects = [
        {
            name: "Baby Yoda",
            category: "cute",
        },
        {
            name: "Cricket Protein",
            category: "food",
        },
        {
            name: "Shibe",
            category: "Cute",
        },
        {
            name: "Ancient India",
            category: "Cradle of Civilization",
        },
        {
            name: "Wasp Crackers",
            category: "Food",
        },
        {
            name: "The Fertile Crescent",
            category: "Cradle of Civilization",
        },
    ];

    groupObjects(objects) should return:
    {
        cute: [
            {
                name: "Baby Yoda",
                category: "cute",
            },
            {
                name: "Shibe",
                category: "Cute",
            },
        ],
        food: [
            {
                name: "Cricket Protein",
                category: "food",
            },
            {
                name: "Wasp Crackers",
                category: "Food",
            },
        ],
        "cradle of civilization": [
            {
                name: "Ancient India",
                category: "Cradle of Civilization",
            },
            {
                name: "The Fertile Crescent",
                category: "Cradle of Civilization",
            },
        ],
    }
*/
function groupObjects(items, groupByKey="category") {
    var result = {};
    for(var item of items) { 
        var key = item[groupByKey].toLowerCase();
        if(result.hasOwnProperty(key)){
            result[key].push(item);
        } else {
            result[key] = [item];
        }
    }

    return result;
}