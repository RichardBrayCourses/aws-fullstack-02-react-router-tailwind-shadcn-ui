import Banner from "./components/Banner";
import ClickButton from "./components/ClickButton";
import CounterProvider from "./context/CounterContext";

const AppContent = () => {
  const buttonMessage = "Click Me !";
  document.documentElement.classList.toggle("dark", true);

  return (
    <div className="min-h-screen flex flex-col  font-sans">
      <main className="flex-1 flex flex-col items-center justify-top">
        <h1 className="mt-4 text-3xl font-bold">Good Morning</h1>
        <h2 className="mt-4 text-2xl font-bold">Time for Coffee</h2>
        <p className="mt-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum,
          tempore.
        </p>

        <Banner />
        <ClickButton message={buttonMessage} />
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
