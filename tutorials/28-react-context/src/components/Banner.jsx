import { useContext } from "react";
import { CounterContext } from "../context/CounterContext.jsx";

const Banner = () => {
  const { counter } = useContext(CounterContext);

  return (
    <div className="w-32 h-32 bg-slate-800 rounded flex items-center justify-center mt-4 mx-auto text-6xl font-bold">
      {counter}
    </div>
  );
};

export default Banner;
