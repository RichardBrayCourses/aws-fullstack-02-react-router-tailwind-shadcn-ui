import { useContext } from "react";
import { CounterContext } from "../context/CounterContext.jsx";

const ClickButton = ({ message }) => {
  const { increment } = useContext(CounterContext);

  return (
    <button
      className="mt-6 px-4 py-2 rounded bg-amber-300 text-slate-900"
      onClick={increment}
    >
      {message}
    </button>
  );
};

export default ClickButton;
