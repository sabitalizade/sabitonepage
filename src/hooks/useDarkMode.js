import React from "react";

const useDarkMode = () => {
  const [theme, setTheme] = React.useState(
    localStorage.getItem("theme") !== null
      ? localStorage.getItem("theme")
      : "dark"
  );
  const colorTheme = theme === "dark" ? "light" : "dark";
  React.useEffect(() => {
    const root = window.document.documentElement;
    root.classList.remove(colorTheme);
    root.classList.add(theme);
    localStorage.setItem("theme", theme);
  }, [theme, colorTheme]);
  return [colorTheme, setTheme, theme];
};

export default useDarkMode;
