import { Route, Routes, BrowserRouter } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import CounterProvider from "./context/CounterContext";

const AppContent = () => {
  document.documentElement.classList.toggle("dark", true);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 flex flex-col bg-sky-500">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </main>
    </div>
  );
};

const App = () => {
  return (
    <BrowserRouter>
      <CounterProvider>
        <AppContent />
      </CounterProvider>
    </BrowserRouter>
  );
};

export default App;
