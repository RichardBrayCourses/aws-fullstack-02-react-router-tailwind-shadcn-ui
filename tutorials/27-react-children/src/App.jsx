import { useState } from "react";
import Banner from "./components/Banner.jsx";
import ClickButton from "./components/ClickButton.jsx";
import { CounterProvider } from "./context/CounterContext.jsx";

function AppContent() {
  const buttonMessage = "Click Me !";
  const [counter, setCounter] = useState(0);

  return (
    <div className="min-h-screen flex flex-col bg-[#1e1e2f] text-neutral-100 font-sans">
      <main className="flex-1 flex flex-col items-center justify-center">
        <h1 className="mt-4 text-3xl font-bold">Good Morning</h1>
        <h2 className="mt-4 text-2xl font-bold">Time for Coffee</h2>
        <p className="mt-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum,
          tempore.
        </p>
        <Banner count={counter} />
        <ClickButton
          message={buttonMessage}
          count={counter}
          callback={setCounter}
        />
      </main>
    </div>
  );
}

/* first version */

export default function App() {
  return <CounterProvider children={<AppContent />} />;
}

/* second version 
export default function App() {
  return (
    <CounterProvider>
      <AppContent />
    </CounterProvider>
  );
}

*/
