const convertToCelsius = function(inputTemp) {
    const output = Math.round(((inputTemp-32)*5)/9).toFixed(1);
    const roundedOutput = Math.round(output);
    if(output - roundedOutput === 0) {
      return roundedOutput;
    } else {
      return output;
    }
};

const convertToFahrenheit = function(inputTemp) {
    const output = Math.round((inputTemp*1.8)+32).toFixed(1);
    const roundedOutput = Math.round(output);
    if(output - roundedOutput === 0) {
      return roundedOutput;
    } else {
      return output;
    }
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
