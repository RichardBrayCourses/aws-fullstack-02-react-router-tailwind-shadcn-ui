let buttonCounter = 0;

function countUp() {
  buttonCounter++;
  const button = document.getElementById("centerbutton");
  button.textContent = "click me : " + buttonCounter;
}

// grab the button once
export function initializeCounterButton() {
  const button = document.getElementById("centerbutton");

  button.addEventListener("click", countUp);
}
