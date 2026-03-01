import { Button } from "@/components/ui/button";
import { useTheme } from "@/context/ThemeContext";
import { Moon, Sun } from "lucide-react";
import { Link } from "react-router-dom";

const Header = () => {
  const { dark, setDark } = useTheme();
  return (
    <header className="bg-sky-500 text-white flex align-center">
      <Button className="m-1" asChild variant="ghost">
        <Link to="/">Home</Link>
      </Button>
      <Button className="m-1" asChild variant="ghost">
        <Link to="/profile">Profile</Link>
      </Button>
      <Button
        className="m-1"
        variant="ghost"
        size="icon"
        onClick={() => {
          setDark(!dark);
        }}
      >
        {dark ? <Sun /> : <Moon />}
      </Button>
    </header>
  );
};

export default Header;
