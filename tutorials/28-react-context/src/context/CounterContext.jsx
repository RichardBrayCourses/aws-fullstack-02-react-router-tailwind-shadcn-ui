import { useState, createContext } from "react";

export const CounterContext = createContext(null);

const CounterProvider = ({ children }) => {
  const [counter, setCounter] = useState(0);

  const sharedData = { counter, setCounter };

  return (
    <CounterContext.Provider value={sharedData}>
      {children}
    </CounterContext.Provider>
  );
};

export default CounterProvider;
