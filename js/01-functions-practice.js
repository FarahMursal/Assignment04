//STEP 1
function halfNumber(num) {
    const result = num / 2;
    window.log(`Half of ${num} is ${result}.`);
    return result;
  }
  
//STEP 2
function squareNumber(num) {
    const result = num * num;
    console.log(`The result of squaring the number ${num} is ${result}.`);
    return result;
  }
//STEP 3
function percentOf(num1, num2) {
    const percent = (num1 / num2) * 100;
    console.log(`${num1} is ${percent}% of ${num2}.`);
    return percent;
  }
//STEP 4
function findModulus(num1, num2) {
    const modulus = num1 % num2;
    console.log(`${modulus} is the modulus of ${num1} and ${num2}.`);
    return modulus;
  }
//STEP 5