import { createContext, ReactNode, useContext, useState } from "react";

/////////////
// CONTEXT
/////////////

export interface AuthenticatedUser {
  email: string;
}

interface AuthContextData {
  user: AuthenticatedUser | null;
}

interface AuthContextValue extends AuthContextData {
  isLoggedIn: boolean;
  login: () => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextValue | null>(null);

/////////////
// HELPER
/////////////

export const useAuth = () => {
  const value = useContext(AuthContext);
  if (!value) throw new Error("useAuth must be used within AuthProvider");
  return value;
};

/////////////
// PROVIDER
/////////////

const MOCK_USER = {
  email: "demo@example.com",
};

interface AuthProviderProps {
  children: ReactNode;
}

const AuthProvider = ({ children }: AuthProviderProps) => {
  const [user, setUser] = useState<AuthenticatedUser | null>(null);

  const login = () => setUser(MOCK_USER);

  const logout = () => setUser(null);

  const isLoggedIn = !!user;

  const value = { user, isLoggedIn, login, logout };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
