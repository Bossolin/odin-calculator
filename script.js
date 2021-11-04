const output = document.querySelector(".output");
const inputs = document.querySelectorAll(".number");
const operator = document.querySelectorAll(".operator");
let num1 = 0;
let num2 = 0;
let operation = "";

inputs.forEach((input) => {
  input.addEventListener(
    "click",
    (e) => (output.innerText += e.target.innerText)
  );
});

operator.forEach(() =>
  addEventListener("click", (e) => {
    num1 = +output.innerText;
    operation = e.target.innerText;
  })
);

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
