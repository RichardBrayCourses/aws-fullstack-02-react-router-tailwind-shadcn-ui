import { createContext, useContext, useState, ReactNode } from "react";
import type { User } from "@/types";

interface AuthContextType {
  user: User | null;
  setUser: (user: User | null) => void;
  authenticated: boolean;
  login: () => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (!context) throw new Error("useAuth must be used within an AuthProvider");
  return context;
};

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);

  return (
    <AuthContext.Provider
      value={{
        user,
        setUser,
        authenticated: !!user,
        login: () =>
          setUser({
            name: "Demo User",
            email: "demo@example.com",
          }),
        logout: () => setUser(null),
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
