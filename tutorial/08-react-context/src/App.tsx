import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Header from "./components/Header";
import StatusBar from "./components/StatusBar";
import { AuthProvider } from "./contexts/AuthContext";

export default function App() {
  return (
    <AuthProvider>
      <div className="flex min-h-screen flex-col bg-slate-900 text-slate-100">
        <Header />
        <main className="flex flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/profile" element={<Profile />} />
          </Routes>
        </main>
        <StatusBar />
      </div>
    </AuthProvider>
  );
}
