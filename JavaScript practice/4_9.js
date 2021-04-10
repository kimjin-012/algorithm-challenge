/* 
    Given an id, an object that has keys with corresponding updated values, and an array of objects
    Find the object by "id" key that matches the given id value and then update that object's
    keys with the provided new values.
    Return the updated object, or null if no object was found

    EXAMPLE:
    const students = [
        {
            id: 1,
            name: "student1",
            isLateToday: false,
            lateCount: 15,
            redBeltStatus: false,
        },
        {
            id: 2,
            name: "student2",
            isLateToday: false,
            lateCount: 1,
            redBeltStatus: false,
        },
        {
            id: 3,
            name: "student3",
            isLateToday: false,
            lateCount: 0,
            redBeltStatus: false,
        },
    ];
    const id1 = 3;
    const updateData1 = { redBeltStatus: true, isLateToday: true };

    findByIdAndUpdate(id1, updateData1, students) should return:
    {
        id: 3,
        name: "student3",
        isLateToday: true,
        lateCount: 0,
        redBeltStatus: true,
    }
*/
function findByIdAndUpdate(id, updateVals, collection) {
    for(var element of collection){ 
        if(element.id === id){
            for(const key in updateVals){
                element[key] = updateVals[key];
            }
            return element;
        }
    }
    return null;
}