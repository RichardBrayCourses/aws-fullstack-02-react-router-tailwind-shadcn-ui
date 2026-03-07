const Header = () => {
  return (
    <header className="bg-sky-500 text-white">
      <button
        className="m-2"
        onClick={() => {
          window.location.href = "http://localhost:5173";
        }}
      >
        Home
      </button>
      <button
        className="m-2"
        onClick={() => {
          window.location.href = "http://localhost:5173/Profile";
        }}
      >
        Profile
      </button>
    </header>
  );
};

export default Header;
