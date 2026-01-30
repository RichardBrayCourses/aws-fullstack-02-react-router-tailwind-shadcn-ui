import ClickButton from "./ClickButton.jsx";
import { useCounter } from "./CounterContext.jsx";

function CountDisplay() {
  const { count } = useCounter();
  return <p className="mt-4 text-slate-300">Global count: {count}</p>;
}

export default function App() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-900 text-slate-100">
      <div className="text-center">
        <h1 className="text-4xl font-bold">My Title</h1>
        <p className="mt-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab, quidem.
        </p>

        <CountDisplay />
        <ClickButton />
      </div>
    </div>
  );
}
