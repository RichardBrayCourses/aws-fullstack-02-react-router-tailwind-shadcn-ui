import {
  createContext,
  Dispatch,
  SetStateAction,
  useContext,
  useEffect,
  useState,
} from "react";

type AuthContextType = {
  isLoggedIn: boolean;
  setLoggedIn: Dispatch<SetStateAction<boolean>>;
};

const AuthContext = createContext<AuthContextType | null>(null);

function getInitialLoggedIn() {
  const stored = sessionStorage.getItem("loggedIn");
  return stored === "true";
}

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [isLoggedIn, setLoggedIn] = useState(getInitialLoggedIn);

  useEffect(() => {
    sessionStorage.setItem("loggedIn", String(isLoggedIn));
  }, [isLoggedIn]);

  return (
    <AuthContext.Provider value={{ isLoggedIn, setLoggedIn }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth must be used within AuthProvider");
  return ctx;
}
