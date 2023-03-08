// ADD A PRIVATE FUNCTION CALLED CALCULATE
function calculate(num1, num2, operation) {
    // ADD FOUR PUBLIC FUNCTIONS BELOW
    switch (operation) {
      case "add":
        return num1 + num2;
      case "subtract":
        return num1 - num2;
      case "multiply":
        return num1 * num2;
      case "divide":
        return num1 / num2;
      default:
        return "Invalid operation";
    }
  }
  // ADD FUNCTION
  function add(num1, num2) {
    return calculate(num1, num2, "add");
  }
  // Subtract FUNCTION
  
  function subtract(num1, num2) {
    return calculate(num1, num2, "subtract");
  }
  // MULTIPLY FUNCTION
  function multiply(num1, num2) {
    return calculate(num1, num2, "multiply");
  }
  // DIVIDE FUNCTION
  function divide(num1, num2) {
    return calculate(num1, num2, "divide");
  }
  // EXPORT THE FOUR PUBLIC FUNCTIONS
  module.exports = {
    add,
    subtract,
    multiply,
    divide,
  };











