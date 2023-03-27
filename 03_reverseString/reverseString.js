const reverseString = function(string) {
    
    if(typeof string !== 'string') {
        return "ERROR";
    }

    let stringArray = string.split('')
    let reversedArray = [];
    
    for(let i = 0; i < string.length; i++) {
        reversedArray.push(stringArray.pop())
    }
    
    return reversedArray.join('');
};
// Do not edit below this line
module.exports = reverseString;
