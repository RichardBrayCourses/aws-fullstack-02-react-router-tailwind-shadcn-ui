import { useEffect, useState } from "react";

function logKey(event: KeyboardEvent): void {
  console.log("key pressed: ", event.key);
}

const CenterButton = () => {
  console.log("body-start");
  const [active, setActive] = useState<boolean>(false);

  useEffect(effectsFunction, [active]);

  function effectsFunction() {
    if (active) {
      console.log("effect-add listener, register cleanup");
      window.addEventListener("keydown", logKey);
      return cleanup;
    }
    console.log("effect-did nothing");
  }

  function cleanup() {
    console.log("cleanup-removing listener");
    window.removeEventListener("keydown", logKey);
  }

  console.log("body-return");
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
