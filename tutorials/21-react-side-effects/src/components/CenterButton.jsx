import { useState } from "react";

function logKey(e) {
  console.log("key pressed: ", e.key);
}

const CenterButton = () => {
  const [active, setActive] = useState(false);

  const handleActivate = () => {
    if (!active) {
      window.addEventListener("keydown", logKey);
      setActive(true);
      console.log("activated, listener added");
    } else {
      setActive(false);
      console.log("deactivated, listener removed");
    }
  };

  return (
    <button
      className="mt-4 bg-[#ffd166] text-[#1e1e2f] py-1.5 px-4 text-base rounded-md border-0 cursor-pointer"
      onClick={handleActivate}
    >
      {active ? "active" : "inactive"}
    </button>
  );
};

export default CenterButton;
