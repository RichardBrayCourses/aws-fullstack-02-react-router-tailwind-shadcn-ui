import { Link } from "react-router-dom";
import { Button } from "./ui/button";

export default function Header() {
  return (
    <header className="border-b border-slate-700 bg-slate-800 px-4 py-3">
      <nav className="flex gap-2">
        <Button asChild variant="ghost" size="sm">
          <Link to="/">Home</Link>
        </Button>
        <Button asChild variant="ghost" size="sm">
          <Link to="/profile">Profile</Link>
        </Button>
      </nav>
    </header>
  );
}
