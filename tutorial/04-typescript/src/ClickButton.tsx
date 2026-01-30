import { useState } from "react";

interface ClickButtonProps {
  message: String;
  initialCount: number;
}

export default function ClickButton(props: ClickButtonProps) {
  const { message, initialCount } = props;
  const [count, setCount] = useState(initialCount);

  console.log(`rendering button ... count = ${count}`);

  return (
    <button
      className="mt-6 px-4 py-2 rounded bg-amber-300 text-slate-900"
      onClick={() => setCount(count + 1)}
    >
      {message} : {count}
    </button>
  );
}
