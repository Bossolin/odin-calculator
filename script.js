const output = document.querySelector(".output");
const result = document.querySelector(".result");
const inputs = document.querySelectorAll(".number");
const operators = document.querySelectorAll(".operator");
let num1 = 0;
let num2 = 0;
let operator = "";

inputs.forEach((input) => {
  input.addEventListener("click", (e) => {
    output.innerText += e.target.innerText;
  });
});

operators.forEach((operator) =>
  operator.addEventListener("click", (e) => {
    num1 = +output.innerText;
    operator = e.target.innerText;
    result.innerText = `${num1} ${operator}`;
    output.innerText = "";
  })
);

const add = (num1, num2) => num1 + num2;
const subtract = (num1, num2) => num1 - num2;
const multiply = (num1, num2) => num1 * num2;
const divide = (num1, num2) => num1 / num2;

function operate(num1, num2, operators) {
  if (operators == "+") return add(num1, num2);
  else if (operator == "-") return subtract(num1, num2);
  else if (operator == "*") return multiply(num1, num2);
  else if (operator == "/") return divide(num1, num2);
}
