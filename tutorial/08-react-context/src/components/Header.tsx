import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "./ui/button";

export default function Header() {
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    const stored = sessionStorage.getItem("loggedIn");
    if (stored !== null) setLoggedIn(stored === "true");
  }, []);

  function toggle() {
    setLoggedIn((prev) => {
      const next = !prev;
      sessionStorage.setItem("loggedIn", String(next));
      return next;
    });
  }

  return (
    <header className="border-b border-slate-700 bg-slate-800 px-4 py-3">
      <nav className="flex gap-2">
        <Button asChild variant="ghost" size="sm">
          <Link to="/">Home</Link>
        </Button>
        <Button asChild variant="ghost" size="sm">
          <Link to="/profile">Profile</Link>
        </Button>
        <Button variant="ghost" size="sm" onClick={toggle}>
          {loggedIn ? "logout" : "login"}
        </Button>
      </nav>
    </header>
  );
}
