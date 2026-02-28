import { useEffect, useState } from "react";

function getInitialValue() {
  return localStorage.getItem("theme") === "dark";
}

// useTheme is a React "hook" function
// - it calls other React hooks such as useState(...), useEffect(...)
// - the name of the function starts with "use"

export function useTheme() {
  const [dark, setDark] = useState(getInitialValue);

  useEffect(() => {
    localStorage.setItem("theme", dark ? "dark" : "light");
    document.documentElement.classList.toggle("dark", dark);
  }, [dark]);

  return [dark, setDark] as const;
}
