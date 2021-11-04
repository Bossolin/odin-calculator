console.log("test");

const add = (num1, num2) => num1 + num2;

const subtract = (num1, num2) => num1 - num2;

const multiply = (num1, num2) => num1 * num2;

const divide = (num1, num2) => num1 / num2;

function operate(num1, num2, operator) {
  if (operator == "+") return add(num1, num2);
  else if (operator == "-") return subtract(num1, num2);
  else if (operator == "*") return multiply(num1, num2);
  else if (operator == "/") return divide(num1, num2);
}

const output = document.querySelector(".output");
const inputs = document.querySelectorAll(".input > div > div");

inputs.forEach((input) => {
  input.addEventListener(
    "click",
    (e) => (output.innerText += e.target.innerText)
  );
});
