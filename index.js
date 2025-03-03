const COUNT_PLUS = document.querySelector(".plus-button");
const COUNT_MINUS = document.querySelector(".minus-button");
const COUNT_DISPLAY = document.querySelector(".result");

let count = 0;

function updateDisplay() {
  COUNT_DISPLAY.textContent = count;
}
updateDisplay();
COUNT_PLUS.addEventListener("click", (event) => {
  event.preventDefault();
  COUNT_DISPLAY.textContent = ++count;
  updateDisplay();
});

COUNT_MINUS.addEventListener("click", (event) => {
  event.preventDefault();
  COUNT_DISPLAY.textContent = --count;
  updateDisplay();
});
