import { useState } from "react";

export default function ClickButton() {
  const [count, setCount] = useState(0);

  return (
    <button
      className="mt-6 px-4 py-2 rounded bg-amber-300 text-slate-900"
      onClick={() => setCount(count + 1)}
    >
      click me : {count}
    </button>
  );
}
