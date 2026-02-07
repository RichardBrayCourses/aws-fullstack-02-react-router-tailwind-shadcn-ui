import { useState } from "react";

export default function CenterButton() {
  const [count, setCount] = useState(0);
  return (
    <button
      className="mt-4 bg-[#ffd166] text-slate-800 py-1.5 px-4 text-base rounded-md border-0 cursor-pointer"
      onClick={() => setCount(count + 1)}
    >
      {`Clicked ${count} times !`}
    </button>
  );
}
