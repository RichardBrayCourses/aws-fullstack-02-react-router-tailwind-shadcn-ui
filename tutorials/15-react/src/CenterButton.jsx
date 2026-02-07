import { useState } from "react";

export default function CenterButton() {
  const [counter, setCounter] = useState(-1);

  return (
    <button
      className="mt-4 bg-[#ffd166] text-slate-800 py-1.5 px-4 text-base rounded-md border-0 cursor-pointer"
      onClick={() => setCounter(counter + 1)}
    >
      Click Me !{counter >= 0 ? ` ${counter}` : ""}
    </button>
  );
}
