const sumAll = function(int1, int2) {
    
    let smallerInt;
    let largerInt;
    let sum = 0;
    
    if(int1 > int2) {
        smallerInt = int2;
        largerInt = int1;
    } else {
        smallerInt = int1;
        largerInt = int2;
    }

    for(let i = smallerInt; i < largerInt+1; i++) {
        sum += i;
    }

    return sum;

};

// Do not edit below this line
sumAll(123, 1);
module.exports = sumAll;
