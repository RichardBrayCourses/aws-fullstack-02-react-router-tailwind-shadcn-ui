import { Button, buttonVariants } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useAuth } from "@/context/AuthContext";
import { useTheme } from "@/context/ThemeContext";
import { Moon, Sun, User } from "lucide-react";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";

const Header = () => {
  const { dark, setDark } = useTheme();
  const { user, login, logout } = useAuth();

  return (
    <header className="flex items-center mt-1">
      <div className="w-full max-w-5xl mx-auto px-4 flex items-center">
        <Button className="m-1 ml-0" asChild variant="ghost">
          <Link to="/">Home</Link>
        </Button>
        <Button className="m-1" asChild variant="ghost">
          <Link to="/profile">Profile</Link>
        </Button>
        <Button
          className="m-1 ml-auto"
          variant="ghost"
          size="icon"
          onClick={() => {
            setDark(!dark);
          }}
        >
          {dark ? <Sun /> : <Moon />}
        </Button>
        <DropdownMenu>
          <DropdownMenuTrigger
            className={cn(
              buttonVariants({ variant: "ghost", size: "icon" }),
              "m-1 mr-0",
            )}
            aria-label="Account menu"
          >
            <User className="h-5 w-5" />
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            {user.isLoggedIn ? (
              <DropdownMenuItem onClick={logout}>Logout</DropdownMenuItem>
            ) : (
              <DropdownMenuItem onClick={login}>Login</DropdownMenuItem>
            )}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  );
};

export default Header;
