import { useCounter } from "../context/CounterContext";

const Banner = () => {
  const value = useCounter();
  const { counter } = value;

  return (
    <div className="w-32 h-32  rounded flex items-center justify-center mt-4 mx-auto text-6xl font-bold">
      {counter}
    </div>
  );
};

export default Banner;
