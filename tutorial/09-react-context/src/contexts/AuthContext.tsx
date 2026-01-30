import { createContext, useContext, useEffect, useState } from "react";

type AuthContextType = { isLoggedIn: boolean; setLoggedIn: (value: boolean) => void };

const AuthContext = createContext<AuthContextType | null>(null);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [isLoggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    const stored = sessionStorage.getItem("loggedIn");
    if (stored !== null) setLoggedIn(stored === "true");
  }, []);

  function setAndPersist(value: boolean) {
    setLoggedIn(value);
    sessionStorage.setItem("loggedIn", String(value));
  }

  return (
    <AuthContext.Provider value={{ isLoggedIn, setLoggedIn: setAndPersist }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth must be used within AuthProvider");
  return ctx;
}
