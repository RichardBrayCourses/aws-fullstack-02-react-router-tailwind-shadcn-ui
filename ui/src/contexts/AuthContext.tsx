import { createContext, useContext, useEffect, useState } from "react";

export type UserInfo = {
  isLoggedIn: boolean;
  sub?: string | null;
  email?: string | null;
  email_verified?: boolean | null;
  groups?: string[];
};

type AuthContextType = {
  userInfo: UserInfo | null;
  loginUser: () => void;
  logoutUser: () => void;
};

const loggedInState = {
  isLoggedIn: true,
  email: "demo@example.com",
};
const loggedOutState = { isLoggedIn: false };

const AuthContext = createContext<AuthContextType | null>(null);

function getInitialLoggedIn() {
  const stored = sessionStorage.getItem("userInfo");
  return stored ? (JSON.parse(stored) as UserInfo) : null;
}

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [userInfo, setUserInfo] = useState<UserInfo | null>(getInitialLoggedIn);

  useEffect(() => {
    sessionStorage.setItem("userInfo", JSON.stringify(userInfo));
  }, [userInfo]);

  const contextValue = {
    userInfo,
    loginUser: () => setUserInfo(loggedInState),
    logoutUser: () => setUserInfo(loggedOutState),
  };

  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
}

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth must be used within AuthProvider");
  return ctx;
}
