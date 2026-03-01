import { createContext, ReactNode, useContext, useState } from "react";

/////////////
// CONTEXT
/////////////

export interface AuthenticatedUser {
  isLoggedIn: boolean;
  email: string | null;
}

interface AuthContextData {
  user: AuthenticatedUser;
}

interface AuthContextValue extends AuthContextData {
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

const LOGGED_OUT_USER = {
  isLoggedIn: false,
  email: null,
};

const LOGGED_IN_USER = {
  isLoggedIn: true,
  email: "demo@example.com",
};

interface AuthProviderProps {
  children: ReactNode;
}

const AuthProvider = ({ children }: AuthProviderProps) => {
  const [user, setUser] = useState<AuthenticatedUser>(LOGGED_OUT_USER);

  const login = () => setUser(LOGGED_IN_USER);
  const logout = () => setUser(LOGGED_OUT_USER);

  const value = { user, login, logout };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
