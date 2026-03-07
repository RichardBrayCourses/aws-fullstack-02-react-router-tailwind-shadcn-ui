import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-sky-500 text-white">
      <Button className="m-2" asChild variant="ghost" size="sm">
        <Link to="/">Home</Link>
      </Button>
      <Button className="m-2" asChild variant="ghost" size="sm">
        <Link to="/profile">Profile</Link>
      </Button>
    </header>
  );
};

export default Header;
