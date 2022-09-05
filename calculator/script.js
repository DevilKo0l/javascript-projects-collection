//
const numberButtons = document.querySelectorAll(".btn");
const operationButtons = document.querySelectorAll("");

//Display number after click
const buttons = document.querySelectorAll(".btn");
let arrInput = [];
buttons.forEach((btn) => {
  btn.addEventListener("click", (event) => {
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
