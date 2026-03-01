import {
  useState,
  createContext,
  useContext,
  ReactNode,
  Dispatch,
  SetStateAction,
} from "react";

/////////////
// CONTEXT
/////////////

interface ThemeContextValue {
  dark: boolean;
  setDark: Dispatch<SetStateAction<boolean>>;
}

const ThemeContext = createContext<ThemeContextValue | null>(null);

/////////////
// HELPER
/////////////

export function useTheme() {
  const value = useContext(ThemeContext);
  if (!value) throw new Error("useTheme must be used within <ThemeProvider>");
  return value;
}

/////////////
// PROVIDER
/////////////

interface ThemeProviderProps {
  children: ReactNode;
}

const ThemeProvider = ({ children }: ThemeProviderProps) => {
  const [dark, setDark] = useState(false);

  const sharedData = { dark, setDark };

  return (
    <ThemeContext.Provider value={sharedData}>{children}</ThemeContext.Provider>
  );
};

export default ThemeProvider;
