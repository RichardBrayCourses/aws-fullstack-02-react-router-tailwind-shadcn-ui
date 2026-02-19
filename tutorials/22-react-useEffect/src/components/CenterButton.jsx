import { useEffect, useState } from "react";

const logKey = (e) => {
  console.log("key pressed: ", e.key);
};

const CenterButton = () => {
  const [active, setActive] = useState(false);

  useEffect(() => {
    if (!active) return;

    window.addEventListener("keydown", logKey);
    console.log("listener added");

    return () => {
      window.removeEventListener("keydown", logKey);
      console.log("listener removed");
    };
  }, [active]);

  return (
    <button
      className="mt-4 bg-[#ffd166] text-[#1e1e2f] py-1.5 px-4 text-base rounded-md border-0 cursor-pointer"
      onClick={() => setActive((prev) => !prev)}
    >
      {active ? "active" : "inactive"}
    </button>
  );
};

export default CenterButton;
