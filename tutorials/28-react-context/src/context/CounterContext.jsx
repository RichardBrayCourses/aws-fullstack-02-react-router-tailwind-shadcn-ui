import { createContext, useState } from "react";

export const CounterContext = createContext(null);

export function CounterProvider({ children }) {
  const [counter, setCounter] = useState(0);
  const increment = () => setCounter((prev) => prev + 1);

  const value = { counter, increment };

  return (
    <CounterContext.Provider value={value}>{children}</CounterContext.Provider>
  );
}

export default CounterProvider;
