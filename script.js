const inputEl = document.querySelector(".screen");
const buttons = document.querySelectorAll(".btn");

for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", function () {
    const buttonsValue = buttons[i].textContent;
    if (buttonsValue === "AC") {
      inputEl.value = "";
    } else if (buttonsValue === "=") {
      inputEl.value = eval(inputEl.value);
    } else {
      displayValue(buttonsValue);
    }
  });
}
function displayValue(buttonsValue) {
  inputEl.value += buttonsValue;
}
