let displayValue = "";



function createButton(value, clickHandler) {
  let btn = document.createElement("button");
  btn.innerText = value;
  btn.addEventListener("click", clickHandler);
  return btn;
}



function appendDisplay(value) {
  displayValue += value;

  
  document.getElementById("display").value = displayValue;
}

function clearDisplay() {
  displayValue = "";
  document.getElementById("display").value = displayValue;
}



function calculate() {
  let displayField = document.getElementById("display");

  try {
    displayValue = eval(displayValue).toString();
    displayField.value = displayValue;
  } catch {
    displayField.value = "error";
  }
}



let buttons = [
  ["MC", clearDisplay],
  ["M%", () => appendDisplay("M%")],
  ["M-", () => appendDisplay("M-")],
  ["M-", () => appendDisplay("M-")],
  ["7", () => appendDisplay("7")],
  ["8", () => appendDisplay("8")],
  ["9", () => appendDisplay("9")],
  ["Mx", () => appendDisplay("Mx")],
  ["4", () => appendDisplay("4")],
  ["5", () => appendDisplay("5")],
  ["6", () => appendDisplay("6")],
  ["M-", () => appendDisplay("M-")],
  ["1", () => appendDisplay("1")],
  ["2", () => appendDisplay("2*")],
  ["3", () => appendDisplay("3")],
  ["M+", () => appendDisplay("M+")],
  ["00", () => appendDisplay("00")],
  ["0", () => appendDisplay("0")],
  [".", () => appendDisplay(".")],
  ["=", calculate],

];

let buttonsContainer = document.getElementById("buttons");

buttons.forEach(([value, clickHandler]) => {
  let button = createButton(value, clickHandler);
  buttonsContainer.appendChild(button);
});