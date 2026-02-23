import { useState, createContext, ReactNode } from "react";

interface CounterContextValue {
  counter: number;
  setCounter: (n: number) => void;
}

export const CounterContext = createContext<CounterContextValue | null>(null);

interface CounterProviderProps {
  children: ReactNode;
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
