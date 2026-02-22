export default function Banner({ number }) {
  return (
    <div className="w-32 h-32 bg-slate-800 rounded flex items-center justify-center text-6xl font-bold">
      {number}
    </div>
  );
}
