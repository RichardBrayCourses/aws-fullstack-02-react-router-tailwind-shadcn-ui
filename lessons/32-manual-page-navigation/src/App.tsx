import Header from "./components/Header";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import CounterProvider from "./context/CounterContext";

const AppContent = () => {
  document.documentElement.classList.toggle("dark", true);
  console.log("HREF: ", window.location.href);
  const page = window.location.href.includes("Profile") ? "profile" : "home";

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 flex flex-col bg-white text-black">
        {page === "home" && <Home />}
        {page === "profile" && <Profile />}
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
