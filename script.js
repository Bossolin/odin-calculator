const output = document.querySelector(".output");
const result = document.querySelector(".result");
const inputs = document.querySelectorAll(".number");
const operators = document.querySelectorAll(".operator");
const equals = document.querySelector(".equals");
const aC = document.querySelector(".AC");
const c = document.querySelector(".backspace");
const decimal = document.querySelector(".decimal");

let num1 = 0;
let num2 = 0;
let operator = "";
let computed = false;
let decimalCheck = true;

function operate(num1, num2, operator) {
  if (operator == "+") return (num1 += num2);
  else if (operator == "-") return (num1 -= num2);
  else if (operator == "x") return (num1 *= num2);
  else if (operator == "/") return (num1 /= num2);
}

inputs.forEach((input) => {
  input.addEventListener("click", (e) => {
    if (computed) {
      output.innerText = "";
      computed = false;
    }
    if (output.innerText.length < 10) output.innerText += e.target.innerText;
  });
});

operators.forEach((item) =>
  item.addEventListener("click", (e) => {
    if (num1 && operator) {
      num2 = +output.innerText;
      num1 = operate(num1, num2, operator);
      operator = e.target.innerText;
      result.innerText = `${num1} ${operator}`;
      output.innerText = "";
      computed = true;
      decimalCheck = true;
    } else {
      num1 = +output.innerText;
      operator = e.target.innerText;
      result.innerText = `${num1} ${operator}`;
      output.innerText = "";
      decimalCheck = true;
    }
  })
);

equals.addEventListener("click", () => {
  if (!num1 && !operator) return;
  if (!num2) num2 = +output.innerText;
  result.innerText = `${num1} ${operator} ${num2} =`;
  num1 = operate(num1, num2, operator);
  output.innerText = num1;
  computed = true;
  decimalCheck = true;
});

aC.addEventListener("click", () => {
  num1 = 0;
  num2 = 0;
  operator = "";
  computed = false;
  decimalCheck = true;
  output.innerText = "";
  result.innerText = "";
});

decimal.addEventListener("click", (e) => {
  if (decimalCheck) output.innerText += e.target.innerText;
  decimalCheck = false;
});

c.addEventListener("click", () => {
  if (output.innerText.slice(-1) == ".") {
    decimalCheck = true;
  }
  output.innerText = output.innerText.substring(0, output.innerText.length - 1);
});
