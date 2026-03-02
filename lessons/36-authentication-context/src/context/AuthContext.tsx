import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";

/////////////
// USER TYPE
/////////////

export type AuthenticatedUser = {
  isLoggedIn: boolean;
  email: string | null;
};

////////////////////////////////////
// LOGGED IN / LOGGED OUT CONSTANTS
////////////////////////////////////

const LOGGED_IN_USER = {
  isLoggedIn: true,
  email: "demo@example.com",
};

const LOGGED_OUT_USER = {
  isLoggedIn: false,
  email: null,
};

/////////////
// CONTEXT
/////////////

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

function saveContext(contextData: AuthContextData) {
  localStorage.setItem("user", JSON.stringify(contextData.user));
}

function loadContext(): AuthContextData {
  const stored = localStorage.getItem("user");

  if (stored === null) {
    return { user: LOGGED_OUT_USER };
  } else {
    return { user: JSON.parse(stored) as AuthenticatedUser };
  }
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

  const sharedData = { user, login, logout };

  return (
    <AuthContext.Provider value={sharedData}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
