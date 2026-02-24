const CenterButton = () => {
  return (
    <button
      className="mt-4 bg-[#ffd166] text-[#1e1e2f] py-1.5 px-4 text-base rounded-md border-0 cursor-pointer"
      onClick={() => alert("clicked")}
    >
      Click me !
    </button>
  );
};

export default CenterButton;
