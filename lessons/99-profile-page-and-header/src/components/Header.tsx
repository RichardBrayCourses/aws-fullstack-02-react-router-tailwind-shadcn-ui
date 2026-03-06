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
    <header className="w-full max-w-5xl mx-auto flex align-center pr-4">
      <Button className="m-1 ml-4" asChild variant="ghost">
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
            "mt-1",
          )}
        >
          <User />
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          {user.isLoggedIn ? (
            <DropdownMenuItem onClick={logout}>Logout</DropdownMenuItem>
          ) : (
            <DropdownMenuItem onClick={login}>Login</DropdownMenuItem>
          )}
        </DropdownMenuContent>
      </DropdownMenu>
    </header>
  );
};

export default Header;

/* 

 <DropdownMenu>
        <DropdownMenuTrigger>
          <User />
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuItem>TEXT</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>

*/
