const numberButtons = document.querySelectorAll("[data-number]");
const operationButtons = document.querySelectorAll("[data-operation]");
const equalsButton = document.querySelector("[data-equals]");
const allClearButton = document.querySelector("[data-all-clear]");

const previousOperandTextElement = document.querySelector(
  "[data-previous-operand]"
);
const currentOperandTextElement = document.querySelector(
  "[data-current-operand]"
);

class Calculator {
  constructor(previousOperandTextElement, currentOperandTextElement) {
    this.previousOperandTextElement = previousOperandTextElement;
    this.currentOperandTextElement = currentOperandTextElement;
  }

  clear() {}

  delete() {}

  appendNumber(number) {}

  chooseOperation(operation) {}

  compute() {}
  updateDisplay() {}
}
//Display number after click
const buttons = document.querySelectorAll(".btn");
let arrInput = [];
buttons.forEach((numberButtons) => {
  numberButtons.addEventListener("click", (event) => {
    console.log(event.target.textContent);
    arrInput.push(event.target.textContent);
    document.querySelector(".input").value = arrInput.join("");

    if (event.target.textContent === "AC") {
      arrInput = [];
      document.querySelector(".input").value = arrInput;
    }

    if (event.target.textContent === "=") {
    }
  });
});

function calculate(num1, num2, operationInput) {
  if (operationInput == "+") {
    return num1 + num2;
  } else if (operationInput == "-") {
    return num1 - num2;
  } else if (operationInput == "*") {
    return num1 * num2;
  } else if (operationInput == "/") {
    return num1 / num2;
  } else if (operationInput == "^") {
    return Math.pow(num1, num2);
  } else {
    return 0;
  }
}

console.log(calculate(1, 2, "+"));
console.log(2 + 3 * 5);
