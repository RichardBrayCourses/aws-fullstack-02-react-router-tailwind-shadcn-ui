import Header from "./components/Header";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import CounterProvider from "./context/CounterContext";

const AppContent = () => {
  document.documentElement.classList.toggle("dark", true);
  const isProfile = window.location.href.includes("Profile");
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 flex flex-col bg-white text-black">
        {!isProfile && <Home />}
        {isProfile && <Profile />}
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
