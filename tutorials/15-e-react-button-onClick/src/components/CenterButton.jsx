export default function CenterButton() {
  return (
    <button
      className="mt-4 bg-[#ffd166] text-slate-800 py-1.5 px-4 text-base rounded-md border-0 cursor-pointer"
      onClick={() => alert("clicked !")}
    >
      Click Me !
    </button>
  );
}
