// IMPORT THE MODULE
const calculator = require("./calculator.js");

do {
    // COLLECT FIRST NUMBER FROM USER
  const num1 = parseFloat(prompt("Enter a number:"));
    // COLLECT SECOND NUMBER FROM USER
  const num2 = parseFloat(prompt("Enter another number:"));
  // COLLECT OPERATION TO PERFORM (+,-,*,/) FROM USER
  const operation = prompt(
    "Enter an operation (add, subtract, multiply, divide):"
  );
// CHECK TO SEE WHAT OPERATION THEY'RE USING
// CALL THE APPROPRIATE FUNCTION

  let result;
  switch (operation) {
    case "add":
      result = calculator.add(num1, num2);
      break;
    case "subtract":
      result = calculator.subtract(num1, num2);
      break;
    case "multiply":
      result = calculator.multiply(num1, num2);
      break;
    case "divide":
      result = calculator.divide(num1, num2);
      break;
    default:
      alert("Invalid operation. Please try again.");
      continue;
  }

  alert(`Result: ${result}`);
  break;
} while (true);




