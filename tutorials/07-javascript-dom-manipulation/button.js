let counter = 0;

const handleButtonClick = (button) => {
  button.textContent = `Click Me : ${counter++}`;
};

export const makeButton = () => {
  const button = document.createElement("button");

  const container = document.getElementById("button-location");

  button.textContent = "Click Me !";
  button.className = "center-button";
  button.addEventListener("click", () => handleButtonClick(button));
  container.appendChild(button);
};
