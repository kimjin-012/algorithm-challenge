// Sales by Match
// if theres a pair, add one

const a = 9;
const ar = [10,20,20,10,10,30,50,10,20];

function sockMerchant(n, ar) {
    // Write your code here
    var object = {};
    var pair = 0;
    for(var i=0; i<n; i++)
    {
        var temp = ar[i];
        if(object[temp])
        {
            object[temp]++;
        }
        else
        {
            object[temp] = 1;
        }
    };

    console.log(object);

    for(let k in object)
    {
        pair += Math.floor(object[k]/2);
    }

    return pair;
}

console.log(sockMerchant(a, ar));
