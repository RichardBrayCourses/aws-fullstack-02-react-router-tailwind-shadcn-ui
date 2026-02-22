import ClickButton from "./components/ClickButton.jsx";
import Banner from "./components/Banner.jsx";
import { useState } from "react";

export default function App() {
  const buttonMessage = "Click Me !";
  const [count, setCount] = useState(0);

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-900 text-slate-100">
      <div className="text-center">
        <h1 className="text-4xl font-bold">My Title</h1>
        <p className="mt-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab, quidem.
        </p>
        <div className="mt-6 flex justify-center">
          <Banner number={count} />
        </div>
        <ClickButton
          message={buttonMessage}
          count={count}
          callback={setCount}
        />
      </div>
    </div>
  );
}
