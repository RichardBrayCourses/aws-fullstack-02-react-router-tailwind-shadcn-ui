import { useState, createContext, useContext, ReactNode } from "react";

interface CounterContextValue {
  counter: number;
  setCounter: (n: number) => void;
}

const CounterContext = createContext<CounterContextValue | null>(null);

interface CounterProviderProps {
  children: ReactNode;
}

export function useCounter() {
  const ctx = useContext(CounterContext);
  if (!ctx) throw new Error("useCounter must be used within <CounterProvider>");
  return ctx;
}

const CounterProvider = ({ children }: CounterProviderProps) => {
  const [counter, setCounter] = useState(0);

  const sharedData = { counter, setCounter };

  return (
    <CounterContext.Provider value={sharedData}>
      {children}
    </CounterContext.Provider>
  );
};

export default CounterProvider;
