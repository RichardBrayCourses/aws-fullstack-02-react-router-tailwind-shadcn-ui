import { useCounter } from "../context/CounterContext";

interface ClickButtonProps {
  message: string;
}

const ClickButton = ({ message }: ClickButtonProps) => {
  const value = useCounter();
  const { counter, setCounter } = value;

  return (
    <button
      className="mt-6 px-4 py-2 rounded bg-amber-300 text-slate-900"
      onClick={() => setCounter(counter + 1)}
    >
      {message}
    </button>
  );
};

export default ClickButton;
