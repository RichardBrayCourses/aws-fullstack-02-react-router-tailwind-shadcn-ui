import { useAuth } from "@/contexts/AuthContext";

export default function StatusBar() {
  const { isLoggedIn } = useAuth();

  return (
    <footer className="border-t border-slate-700 bg-slate-800 px-4 py-2 text-sm text-slate-400">
      Status: {isLoggedIn ? "Logged in" : "Logged out"}
    </footer>
  );
}
