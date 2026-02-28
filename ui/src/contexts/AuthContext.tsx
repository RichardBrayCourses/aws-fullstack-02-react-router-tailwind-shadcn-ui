import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import type { User } from "@/types";

/////////////
// CONTEXT
/////////////

interface AuthContextValue {
  user: User | null;
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

const MOCK_USER: User = {
  email: "demo@example.com",
};

function getInitialValue(): User | null {
  const stored = sessionStorage.getItem("user");
  return stored ? (JSON.parse(stored) as User) : null;
}

interface AuthProviderProps {
  children: ReactNode;
}

const AuthProvider = ({ children }: AuthProviderProps) => {
  const [user, setUser] = useState<User | null>(getInitialValue);
  const isLoggedIn = !!user;

  useEffect(() => {
    sessionStorage.setItem("user", JSON.stringify(user));
  }, [user]);

  const login = () => setUser(MOCK_USER);
  const logout = () => setUser(null);

  const value = { user, isLoggedIn, login, logout };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
