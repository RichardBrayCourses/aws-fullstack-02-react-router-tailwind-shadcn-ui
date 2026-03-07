import { useState } from "react";

function logKey(event) {
  console.log("key pressed: ", event.key);
}

const CenterButton = () => {
  const [active, setActive] = useState(false);

  const handleClick = () => {
    if (!active) {
      window.addEventListener("keydown", logKey);
      setActive(true);
      console.log("activated, listener added");
    } else {
      setActive(false);
      window.removeEventListener("keydown", logKey);
      console.log("deactivated, listener removed");
    }
  };

  const message = active ? "active" : "inactive";
  return (
    <button
      className="mt-4 bg-[#ffd166] text-[#1e1e2f] py-1.5 px-4 text-base rounded-md border-0 cursor-pointer"
      onClick={() => handleClick()}
    >
      {message}
    </button>
  );
};

export default CenterButton;
