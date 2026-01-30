import { createContext, useContext, useState } from "react";

const CounterContext = createContext(null);

export function CounterProvider({ children }) {
  const [count, setCount] = useState(0);

  const value = { count, setCount };
  return (
    <CounterContext.Provider value={value}>{children}</CounterContext.Provider>
  );
}

export function useCounter() {
  const ctx = useContext(CounterContext);
  if (!ctx) throw new Error("useCounter must be used within <CounterProvider>");
  return ctx;
}
