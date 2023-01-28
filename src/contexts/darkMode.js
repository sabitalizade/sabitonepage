import { createContext, useContext, useState } from "react";

export const Context = createContext();

const DarkModeContextProvider = ({ children }) => {
  const [isDarkMode, setDarkMode] = useState(
    localStorage.getItem("theme") === "light" ? false : true
  );
  return (
    <Context.Provider value={{ isDarkMode, setDarkMode }}>
      {children}
    </Context.Provider>
  );
};

export const useIsDarkMode = () => useContext(Context);

export default DarkModeContextProvider;
