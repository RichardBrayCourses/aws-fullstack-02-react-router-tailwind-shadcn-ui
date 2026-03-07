import { useState, createContext, useContext, ReactNode } from "react";

/////////////
// CONTEXT
/////////////

interface CounterContextValue {
  counter: number;
  setCounter: (n: number) => void;
}

const CounterContext = createContext<CounterContextValue | null>(null);

/////////////
// HELPER
/////////////

export function useCounter() {
  const value = useContext(CounterContext);
  if (!value)
    throw new Error("useCounter must be used within <CounterProvider>");
  return value;
}

/////////////
// PROVIDER
/////////////

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
