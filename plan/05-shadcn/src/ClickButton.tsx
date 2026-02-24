import { useState } from "react";
import { Button } from "./components/ui/button";

interface ClickButtonProps {
  message: String;
  initialCount: number;
}

export default function ClickButton(props: ClickButtonProps) {
  const { message, initialCount } = props;
  const [count, setCount] = useState(initialCount);

  console.log(`rendering button ... count = ${count}`);

  return (
    <Button
      className="mt-6 bg-amber-300 text-slate-900 hover:bg-amber-400"
      onClick={() => setCount(count + 1)}
    >
      {message} : {count}
    </Button>
  );
}
