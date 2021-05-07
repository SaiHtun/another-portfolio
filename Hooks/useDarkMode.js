import { useEffect, useState } from "react";
import  checkBeforeLoad  from '../utility/checkBeforeLoad';

export const useDarkMode = () => {
  const preferDarkQuery = "(prefers-color-scheme: dark)";

  const [theme, setTheme] = useState("light");
  const [mountedComponent, setMountedComponent] = useState(false);

  const setMode = (mode) => {
    window.localStorage.setItem("theme", mode);
    setTheme(mode);
  };

  const themeToggler = () => {
    theme === "light" ? setMode("dark") : setMode("light");
  };

  useEffect(() => {
    const mediaQuery = window.matchMedia(preferDarkQuery);
    const handleChange = () => {
      setTheme(mediaQuery.matches ? "dark" : "light");
    };
    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  useEffect(() => {
    checkBeforeLoad()
  }, [theme])

  useEffect(() => {
    const localTheme = window.localStorage.getItem("theme");
    localTheme && setTheme(localTheme);
    setMountedComponent(true);
   
  }, []);

  return [theme, themeToggler, mountedComponent];
};
