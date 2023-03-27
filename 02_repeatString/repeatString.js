const repeatString = (string, timesToRepeat) => {
    if(string < 0 || timesToRepeat < 0) return "ERROR";
    let output = ''
    for(let i = 0; i < timesToRepeat; i++) {
      output += string;
    }
    return output;
}
// Do not edit below this line
module.exports = repeatString;
