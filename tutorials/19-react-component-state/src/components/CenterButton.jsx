import { useState } from "react";

const CenterButton = () => {
  const [counter, setCounter] = useState(0);

  const message = `clicked ${counter} times`;
  return (
    <button
      className="mt-4 bg-[#ffd166] text-[#1e1e2f] py-1.5 px-4 text-base rounded-md border-0 cursor-pointer"
      onClick={() => setCounter(counter + 1)}
    >
      {message}
    </button>
  );
};

export default CenterButton;
