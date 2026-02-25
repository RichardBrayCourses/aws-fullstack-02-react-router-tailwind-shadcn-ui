import { useEffect, useState } from "react";

function getInitialDark() {
  return localStorage.getItem("theme") === "dark";
}

export function useDarkness() {
  const [dark, setDark] = useState(getInitialDark);

  useEffect(() => {
    localStorage.setItem("theme", dark ? "dark" : "light");
    document.documentElement.classList.toggle("dark", dark);
  }, [dark]);

  return [dark, setDark] as const;
}
