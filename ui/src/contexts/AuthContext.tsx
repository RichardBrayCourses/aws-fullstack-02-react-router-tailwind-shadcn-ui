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

interface AuthContextData {
  user: User | null;
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

////////////////////////
// LOAD / SAVE CONTEXT
////////////////////////

function saveContext(contextData: AuthContextData) {
  sessionStorage.setItem("user", JSON.stringify(contextData));
}

function loadContext(): AuthContextData {
  const stored = sessionStorage.getItem("user");
  return stored ? (JSON.parse(stored) as AuthContextData) : { user: null };
}

/////////////
// PROVIDER
/////////////

const MOCK_USER: User = {
  email: "demo@example.com",
};

interface AuthProviderProps {
  children: ReactNode;
}

const AuthProvider = ({ children }: AuthProviderProps) => {
  const loadedContext = loadContext();
  const [user, setUser] = useState<User | null>(loadedContext.user);
  const isLoggedIn = !!user;

  useEffect(() => {
    saveContext({ user });
  }, [user]);

  const login = () => setUser(MOCK_USER);
  const logout = () => setUser(null);

  const value = { user, isLoggedIn, login, logout };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
