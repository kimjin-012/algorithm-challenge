function swap(obj){
    var switched = {};
    for (var key in obj){
        switched[obj[key]] = key; 
    }
    return obj = switched;
}

console.log(swap({ name: "Zaphod", charm: "high", morals: "dicey" }));

function swap(obj){
    for (var key in obj){
        obj[obj[key]] = key;
        delete obj[key];
    }
    return obj
}
console.log(swap({ name: "Zaphod", charm: "high", morals: "dicey" }));