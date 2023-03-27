const reverseString = function(string) {
    
    if(typeof string !== 'string') {
        return "ERROR";
    }
    
    return string.split('').reverse().join('');
}
// Do not edit below this line
module.exports = reverseString;
