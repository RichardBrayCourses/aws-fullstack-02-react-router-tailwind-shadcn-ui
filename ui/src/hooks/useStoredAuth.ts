import { useEffect, useState } from "react";
import type { User } from "@/types";

const MOCK_USER: User = {
  email: "demo@example.com",
};

function getInitialValue(): User | null {
  const stored = sessionStorage.getItem("user");
  return stored ? (JSON.parse(stored) as User) : null;
}

export function useStoredAuth() {
  const [user, setUser] = useState<User | null>(getInitialValue);
  const isLoggedIn = !!user;

  useEffect(() => {
    sessionStorage.setItem("user", JSON.stringify(user));
  }, [user]);

  const login = () => setUser(MOCK_USER);
  const logout = () => setUser(null);

  return { user, isLoggedIn, login, logout };
}
