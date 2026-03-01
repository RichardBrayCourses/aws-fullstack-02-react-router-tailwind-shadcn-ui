import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";

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

////////////////////////
// LOAD / SAVE CONTEXT
////////////////////////

const LOGGED_OUT_USER = {
  isLoggedIn: false,
  email: null,
};

const LOGGED_IN_USER = {
  isLoggedIn: true,
  email: "demo@example.com",
};

function saveContext(contextData: AuthContextData) {
  sessionStorage.setItem("user", JSON.stringify(contextData.user));
}

function loadContext(): AuthContextData {
  const stored = sessionStorage.getItem("user");
  return {
    user: stored ? (JSON.parse(stored) as AuthenticatedUser) : LOGGED_OUT_USER,
  };
}

/////////////
// PROVIDER
/////////////

interface AuthProviderProps {
  children: ReactNode;
}

const AuthProvider = ({ children }: AuthProviderProps) => {
  const loadedContext = loadContext();
  const [user, setUser] = useState<AuthenticatedUser>(loadedContext.user);

  useEffect(() => {
    saveContext({ user });
  }, [user]);

  const login = () => setUser(LOGGED_IN_USER);
  const logout = () => setUser(LOGGED_OUT_USER);

  const value = { user, login, logout };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
