import ClickButton from "./ClickButton";

export default function Home() {
  const buttonMessage = "Hello World";

  return (
    <div className="flex flex-1 items-center justify-center">
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
