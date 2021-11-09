const output = document.querySelector(".output");
const result = document.querySelector(".result");
const inputs = document.querySelectorAll(".number");
const operators = document.querySelectorAll(".operator");
const equals = document.querySelector(".equals");
const aC = document.querySelector(".AC");
const c = document.querySelector(".backspace");
const decimal = document.querySelector(".decimal");

const arrNums = [...inputs];
const numValues = arrNums.map((num) => num.innerText);
const arrOp = [...operators];
const opValues = arrOp.map((op) => op.innerText);

let num1 = 0;
let num2 = 0;
let operator = "";
let computed = false;
let decimalCheck = true;

function operate(num1, num2, operator) {
  switch (operator) {
    case "+":
      return Math.round((num1 += num2) * 100000) / 100000;
    case "-":
      return Math.round((num1 -= num2) * 100000) / 100000;
    case "*":
      return Math.round((num1 *= num2) * 100000) / 100000;
    case "/":
      return Math.round((num1 /= num2) * 100000) / 100000;
    default:
      break;
  }
}

inputs.forEach((input) => {
  input.addEventListener("click", (e) => {
    if (computed) {
      output.innerText = "";
      computed = false;
      num1 = 0;
      num2 = 0;
      operator = "";
    }
    if (output.innerText.length < 10) output.innerText += e.target.innerText;
  });
});

operators.forEach((item) =>
  item.addEventListener("click", (e) => {
    if (computed) {
      num1 = +output.innerText;
      operator = e.target.innerText;
      computed = false;
      result.innerText = `${num1} ${operator}`;
      num2 = 0;
      output.innerText = "";
    } else if (num1 && operator) {
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
  num2 = +output.innerText;
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

window.addEventListener("keydown", (e) => {
  console.log(e.key);
  if (numValues.includes(e.key)) {
    if (computed) {
      output.innerText = "";
      computed = false;
    }
    if (output.innerText.length < 10) output.innerText += e.key;
  } else if (decimal.innerText == e.key) {
    if (decimalCheck) output.innerText += e.key;
    decimalCheck = false;
  } else if (opValues.includes(e.key)) {
    if (computed) {
      num1 = +output.innerText;
      operator = e.key;
      computed = false;
      result.innerText = `${num1} ${operator}`;
      num2 = 0;
      output.innerText = "";
    } else if (num1 && operator) {
      num2 = +output.innerText;
      num1 = operate(num1, num2, operator);
      operator = e.key;
      result.innerText = `${num1} ${operator}`;
      output.innerText = "";
      computed = true;
      decimalCheck = true;
    } else {
      num1 = +output.innerText;
      operator = e.key;
      result.innerText = `${num1} ${operator}`;
      output.innerText = "";
      decimalCheck = true;
    }
  } else if (equals.innerText == e.key) {
    if (!num1 && !operator) return;
    num2 = +output.innerText;
    result.innerText = `${num1} ${operator} ${num2} =`;
    num1 = operate(num1, num2, operator);
    output.innerText = num1;
    computed = true;
    decimalCheck = true;
  } else if (e.key == "Enter") {
    if (!num1 && !operator) return;
    num2 = +output.innerText;
    result.innerText = `${num1} ${operator} ${num2} =`;
    num1 = operate(num1, num2, operator);
    output.innerText = num1;
    computed = true;
    decimalCheck = true;
  } else if (e.key == "Backspace") {
    if (output.innerText.slice(-1) == ".") {
      decimalCheck = true;
    }
    output.innerText = output.innerText.substring(
      0,
      output.innerText.length - 1
    );
  } else if (e.key == "Escape") {
    num1 = 0;
    num2 = 0;
    operator = "";
    computed = false;
    decimalCheck = true;
    output.innerText = "";
    result.innerText = "";
  }
});
