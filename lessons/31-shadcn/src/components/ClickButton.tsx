import { useCounter } from "../context/CounterContext";
import { Button } from "@/components/ui/button";

interface ClickButtonProps {
  message: string;
}

const ClickButton = ({ message }: ClickButtonProps) => {
  const value = useCounter();
  const { counter, setCounter } = value;

  return (
    <Button
      className="mt-6 px-4 py-2 rounded "
      onClick={() => setCounter(counter + 1)}
    >
      {message}
    </Button>
  );
};

export default ClickButton;
