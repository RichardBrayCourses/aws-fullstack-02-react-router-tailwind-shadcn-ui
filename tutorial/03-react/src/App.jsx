import ClickButton from "./ClickButton.jsx";

export default function App() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-900 text-slate-100">
      <div className="text-center">
        <h1 className="text-4xl font-bold">My Title</h1>
        <p className="mt-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab, quidem.
        </p>
        <ClickButton />
      </div>
    </div>
  );
}
