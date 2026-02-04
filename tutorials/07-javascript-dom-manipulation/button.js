let counter = 0;

const handleClick = (mybutton) => {
  mybutton.textContent = `Click Me ! ${counter++}`;
};

export const makeButton = () => {
  const mybutton = document.createElement("button");

  const container = document.getElementById("button-location");

  mybutton.textContent = "Click Me !";
  mybutton.className = "center-button";

  mybutton.addEventListener("click", () => handleClick(mybutton));
  container.appendChild(mybutton);
};
