import { createContext, useContext, useState, ReactNode } from "react";
import type { OauthUser } from "@/types";

interface AuthContextType {
  user: OauthUser | null;
  setUser: (user: OauthUser | null) => void;
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
  const [user, setUser] = useState<OauthUser | null>(null);

  return (
    <AuthContext.Provider
      value={{
        user,
        setUser,
        authenticated: !!user,
        login: () =>
          setUser({
            email: "demo@example.com",
          }),
        logout: () => setUser(null),
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
