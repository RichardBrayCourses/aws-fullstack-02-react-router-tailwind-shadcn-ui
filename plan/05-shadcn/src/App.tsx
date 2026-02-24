import ClickButton from "./ClickButton";

export default function App() {
  const buttonMessage = "Hello World";

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-900 text-slate-100">
      <div className="text-center">
        <h1 className="text-4xl font-bold">My Title</h1>
        <p className="mt-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab, quidem.
        </p>
        <ClickButton message={buttonMessage} initialCount={5} />
      </div>
    </div>
  );
}
