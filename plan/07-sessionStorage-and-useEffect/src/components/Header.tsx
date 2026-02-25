import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "./ui/button";

export default function Header() {
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    const stored = sessionStorage.getItem("loggedIn");
    if (stored !== null) setLoggedIn(stored === "true");
  }, []);

  useEffect(() => {
    sessionStorage.setItem("loggedIn", String(loggedIn));
  }, [loggedIn]);

  return (
    <header className="border-b border-slate-700 bg-slate-800 px-4 py-3">
      <nav className="flex gap-2">
        <Button asChild variant="ghost" size="sm">
          <Link to="/">Home</Link>
        </Button>
        <Button asChild variant="ghost" size="sm">
          <Link to="/profile">Profile</Link>
        </Button>
        <Button
          variant="ghost"
          size="sm"
          onClick={() => setLoggedIn((value) => !value)}
        >
          {loggedIn ? "logout" : "login"}
        </Button>
      </nav>
    </header>
  );
}
