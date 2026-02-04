let icounter = 0;

const handleButtonClick = (button) => {
  button.textContent = `Click me : ${++icounter}`;
};

export const makeButton = () => {
  const container = document.getElementById("button-location");

  const button = document.createElement("button");
  button.className = "center-button";

  button.textContent = "Click me !";

  button.addEventListener("click", () => handleButtonClick(button));

  container.appendChild(button);
};
