const add = function(...args) {
  if(arguments.length < 2) return "ERROR";
  if(typeof args === 'object') {
    return args[0] + args[1];
  } else {
    const [firstArg] = args;
    const [, secondArg] = args;
    return firstArg + secondArg;
  }
};

const subtract = function(...args) {
  if(arguments.length < 2) return "ERROR";
  if(typeof args === 'object') {
    return args[0] - args[1];
  } else {
    const [firstArg] = args;
    const [, secondArg] = args;
    return firstArg - secondArg;
  }
};  

const sum = function(...args) {
  if(arguments.length === 0) return "ERROR";
  if(arguments.length === 1) return args;
  else {
    let argsArray = new Array(...args);
    return argsArray.reduce( (sum, currentNumber) => {
      sum + currentNumber;
    }, 0)
  }
};

const multiply = function(...args) {
  if() {
    return args.reduce( (product, currentNumber) => {
      return product * currentNumber;
    }, 1);  
  } else {
  let argArray = new Array(...args);
  return argArray.reduce( (product, currentNumber) => {
    return product * currentNumber;
  }, 1);  
}
};

const power = function(...args) {
  if(arguments.length < 2) return "ERROR";
    return args[0]**args[1];
};

const factorial = function(arg) {
  if(typeof arg !== "number") return "ERROR";
  else if(arg === 0) return 1;
  else if(arg > 0){
    product = 1;
    for(let i = arg; i > 0; i--) {
      product *= i;
    }
    return product;
  }
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
