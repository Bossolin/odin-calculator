const output = document.querySelector(".output");
const result = document.querySelector(".result");
const inputs = document.querySelectorAll(".number");
const operators = document.querySelectorAll(".operator");
const equals = document.querySelector(".equals");
const aC = document.querySelector(".AC");

let num1 = 0;
let num2 = 0;
let operator = "";
let computed = false;

function operate(num1, num2, operator) {
  if (operator == "+") return (output.innerText = num1 + num2);
  else if (operator == "-") return (output.innerText = num1 - num2);
  else if (operator == "x") return (output.innerText = num1 * num2);
  else if (operator == "/") return (output.innerText = num1 / num2);
}

inputs.forEach((input) => {
  input.addEventListener("click", (e) => {
    if (computed) {
      output.innerText = "";
      computed = false;
    }
    output.innerText += e.target.innerText;
  });
});

operators.forEach((item) =>
  item.addEventListener("click", (e) => {
    num1 = +output.innerText;
    operator = e.target.innerText;
    result.innerText = `${num1} ${operator}`;
    output.innerText = "";
  })
);

equals.addEventListener("click", () => {
  num2 = +output.innerText;
  console.log(operator);
  result.innerText = `${num1} ${operator} ${num2} =`;
  operate(num1, num2, operator);
  computed = true;
});

aC.addEventListener("click", () => {
  num1 = 0;
  num2 = 0;
  operator = "";
  computed = false;
  output.innerText = "";
  result.innerText = "";
});
