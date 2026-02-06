let counter = 0;

const handleClick = (mybutton) => {
  mybutton.textContent = `Click Me ! ${counter++}`;
};

export const makeButton = () => {
  const mybutton = document.createElement("button");

  const container = document.getElementById("button-location");

  mybutton.textContent = "Click Me !";
  mybutton.className =
    "mt-4 bg-[#ffd166] text-slate-800 py-1.5 px-4 text-base rounded-md border-0 cursor-pointer";

  mybutton.addEventListener("click", () => handleClick(mybutton));
  container.appendChild(mybutton);
};
