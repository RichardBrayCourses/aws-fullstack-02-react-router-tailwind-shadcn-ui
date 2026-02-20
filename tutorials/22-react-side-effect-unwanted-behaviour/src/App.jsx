import { useState } from "react";
import CenterButton from "./components/CenterButton.jsx";

const App = () => {
  const [showButton, setShowButton] = useState(true);

  return (
    <div className="min-h-screen flex flex-col bg-[#1e1e2f] text-neutral-100 font-sans">
      <main className="flex-1 flex flex-col items-center justify-top">
        <h1 className="mt-4 text-3xl font-bold">Good Morning</h1>
        <h2 className="mt-4 text-2xl font-bold">Time for Coffee</h2>

        <button
          className="mt-4 bg-sky-500 text-black py-1 px-3 rounded"
          onClick={() => setShowButton((prev) => !prev)}
        >
          Toggle Logging Button
        </button>

        {showButton && <CenterButton />}
      </main>
    </div>
  );
};

export default App;
