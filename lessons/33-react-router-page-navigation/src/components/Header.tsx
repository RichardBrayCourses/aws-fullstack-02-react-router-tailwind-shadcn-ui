import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-yellow-500 flex ">
      <Button asChild variant="ghost" size="sm">
        <Link to="/">Home</Link>
      </Button>
      <Button asChild variant="ghost" size="sm">
        <Link to="/profile">Profile</Link>
      </Button>
    </header>
  );
};

export default Header;
