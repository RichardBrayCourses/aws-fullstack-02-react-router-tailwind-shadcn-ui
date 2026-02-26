import Banner from "./components/Banner";
import ClickButton from "./components/ClickButton";
import CounterProvider from "./context/CounterContext";

const AppContent = () => {
  console.log("REACT-UI APP RELOADED");
  console.log("REACT-UI window.location.href:", window.location.href);

  document.documentElement.classList.toggle("dark", true);

  const buttonMessage = "Click Me !";

  return (
    <div className="min-h-screen flex flex-col font-sans">
      <main className="flex-1 flex flex-col items-center justify-top gap-3">
        <h1 className="mt-4 text-3xl font-bold">Good Morning</h1>
        <h2 className="mt-4 text-2xl font-bold">Time for Coffee</h2>

        <Banner />
        <ClickButton message={buttonMessage} />

        <button
          onClick={() => (window.location.href = "https://google.com")}
          className="w-100 px-4 py-2 bg-green-500 text-white rounded"
        >
          go to google.com
        </button>

        <button
          onClick={() => (window.location.href = "http://localhost:5173")}
          className="w-100 px-4 py-2 bg-green-500 text-white rounded"
        >
          go to http://localhost:5173
        </button>

        <button
          onClick={() => (window.location.href = "http://localhost:5173/xxx")}
          className="w-100 px-4 py-2 bg-green-500 text-white rounded"
        >
          go to http://localhost:5173/xxx
        </button>
      </main>
    </div>
  );
};

const App = () => {
  return (
    <CounterProvider>
      <AppContent />
    </CounterProvider>
  );
};

export default App;
