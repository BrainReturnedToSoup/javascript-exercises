const removeFromArray = function(array, ...args) {
    
    if(array.length < 1 || args === undefined) return "ERROR";

    let output = array.filter(element => {
       return !args.includes(element);
    })

    return output;

};

// Do not edit below this line
module.exports = removeFromArray;
